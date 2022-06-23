<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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

require __DIR__.'/auth.php';
