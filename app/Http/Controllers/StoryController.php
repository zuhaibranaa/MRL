<?php

namespace App\Http\Controllers;

use App\Models\{Story,Category};
use App\Http\Requests\StoreStoryRequest;
use App\Http\Requests\UpdateStoryRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stories = Story::all();
        return Inertia::render('Stories',[
            'items' => $stories,
            'auth' => auth()->user(),
            'type' => 'story',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('CreateStory',[
            'auth' => auth()->user(),
            'category' => Category::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreStoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStoryRequest $request)
    {
        $story = new Story();
        $story['title'] = $request->title;
        if($request->hasFile('image')){
            $filename = $request->image->getClientOriginalName();
            $request->image->move(public_path().'/images/', $filename);
            $userimage = $filename;
        }
        $story['image'] = $userimage;
        $story['content'] = $request->content;
        $story['description'] = $request->description;
        $story['author'] = auth()->user()->id;
        $story['genre'] = $request->genre;
        $story->save();
        return Redirect::route('story.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Story  $story
     * @return \Illuminate\Http\Response
     */
    public function show(Story $story)
    {
        return Inertia::render('BookDetails',[
            'item' => $story,
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Story  $story
     * @return \Illuminate\Http\Response
     */
    public function edit(Story $story)
    {
        return Inertia::render('CreateStory',[
            'data' => $story,
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateStoryRequest  $request
     * @param  \App\Models\Story  $story
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStoryRequest $request, Story $story)
    {
        $story['author'] = auth()->user()->id;
        $story['title'] = $request->title;
        $story['description'] = $request->description;
        $story->save();
        return Redirect::route('story.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Story  $story
     * @return \Illuminate\Http\Response
     */
    public function destroy(Story $story)
    {
        $story->delete();
        return Redirect::route('story.index');
    }
}
