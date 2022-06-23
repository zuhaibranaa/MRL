<?php

use App\Models\{User, Book, Story};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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
    'author' => \App\Http\Controllers\AuthorController::class,
    'book' => \App\Http\Controllers\BookController::class,
    'bookshelf' => \App\Http\Controllers\BookShelfController::class,
    'profile' => \App\Http\Controllers\StoryController::class,
    'story' => \App\Http\Controllers\StoryController::class,
]);
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
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
