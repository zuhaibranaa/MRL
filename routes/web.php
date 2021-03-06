<?php

use App\Models\{User, Book, Story};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Route::get('/', function () {
    $books = Book::all();
    $stories = Story::all();
    return Inertia::render('HomePage', [
        'books' => $books,
        'stories' => $stories,
        'auth' => auth()->user(),
    ]);
})->name('/');
Route::resources([
    'book' => \App\Http\Controllers\BookController::class,
    'bookshelf' => \App\Http\Controllers\BookShelfController::class,
    'profile' => \App\Http\Controllers\ProfileController::class,
    'story' => \App\Http\Controllers\StoryController::class,
]);
Route::get('/dashboard', function () {
    return redirect(url('/'));
});
Route::post('search',function (Request $data)
{
    $book = Book::where('title', 'LIKE', $data->title)->get();
    $story = Story::where('title', 'LIKE', $data->title)->get();
    return Inertia::render('HomePage',[
        'book' => $book,
        'story' => $story,
        'auth' => auth()->user(),
    ]
);
})->name('search');

require __DIR__.'/auth.php';
