<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  User  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $id)
    {
        return $id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  User  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,User $id)
    {
        $id;
        // $user
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if(auth()->user()->is_admin || auth()->user()->id == $user->id){
            $user->delete();
            return redirect()->back();
        }else {
            return abort(403, "You Are Not Authorized To Perform This Task");
        }
    }
}
