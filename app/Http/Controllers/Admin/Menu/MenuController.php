<?php

namespace App\Http\Controllers\Admin\Menu;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Menu;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{
    public function getIndex()
    {
        $menuList = Menu::get();

        return view('admin.menu.list')->withMenus($menuList);
    }

    public function getEdit(Menu $menu)
    {
        return view('admin.menu.edit')->withMenu($menu);
    }

    public function update(Menu $menu, Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'slug' => 'required'
            ]
        );

        $menu->update($request->all());

        if($validator->fails())
        {
            return redirect()->back()->withInput()->withErrors($validator->messages());
        }

        return redirect()->route('admin.menu.index')->withMsg('saved successful');
    }

    public function getCreate()
    {
        return view('admin.menu.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'slug' => 'required'
            ]
        );

        if($validator->fails())
        {
            return redirect()->back()->withInput()->withErrors($validator->messages());
        }

        $menu = Menu::create($request->all());

        $menu->save();

        return redirect()->route('admin.menu.index')->withMsg('saved successful');
    }

    public function destroy(Menu $menu)
    {
        $menu->delete();

        return redirect()->back()->withMsg('deleted successful');
    }
}