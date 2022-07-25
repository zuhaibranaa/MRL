<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('EditProfile',[
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find(auth()->user()->id);
        if ($request->password != null) {
            $user->password = Hash::make($request->password);
        }
        if($request->name != null) {
            $user->name = $request->name;
        }
        if($request->hasFile('image')){
            $filename = $request->image->getClientOriginalName();
            $request->image->move(public_path().'/images/', $filename);
            $user->image = $filename;
        }
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find(auth()->user()->id);
        $user->delete();
        return redirect(url('/'));
    }
}
