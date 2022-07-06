<?php

namespace App\Http\Controllers;

use App\Models\BookShelf;
use App\Http\Requests\StoreBookShelfRequest;
use Inertia\Inertia;

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
        $bookShelf = BookShelf::all()->where('user','=',auth()->user()->id);
        return Inertia::render('BookShelf',[
            'auth' => auth()->user(),
            'items' => $bookShelf
        ]);
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
        if ($request->item_type == 'book') {
            $bookShelf['book'] = $request->item_id;
        }else{

            $bookShelf['story'] = $request->item_id;
        }
        $bookShelf['status'] = $request->status;
        $bookShelf->save();
        return redirect(url('bookshelf'));
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
