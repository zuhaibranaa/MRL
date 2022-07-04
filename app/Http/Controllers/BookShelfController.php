<?php

namespace App\Http\Controllers;

use App\Models\BookShelf;
use App\Http\Requests\StoreBookShelfRequest;
use App\Http\Requests\UpdateBookShelfRequest;

class BookShelfController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookShelf = BookShelf::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBookShelfRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookShelfRequest $request)
    {
        $bookShelf = new BookShelf();
        $bookShelf['user'] = auth()->user()->id;
        $bookShelf['book'] = $request->book;
        $bookShelf['story'] = $request->story;
        $bookShelf->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BookShelf  $bookShelf
     * @return \Illuminate\Http\Response
     */
    public function show(BookShelf $bookShelf)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BookShelf  $bookShelf
     * @return \Illuminate\Http\Response
     */
    public function edit(BookShelf $bookShelf)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBookShelfRequest  $request
     * @param  \App\Models\BookShelf  $bookShelf
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBookShelfRequest $request, BookShelf $bookShelf)
    {
        $bookShelf['book'] = $request->book;
        $bookShelf['story'] = $request->story;
        $bookShelf->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BookShelf  $bookShelf
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookShelf $bookShelf)
    {
        $bookShelf->delete();
        return redirect()->back();
    }
}
