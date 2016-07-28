@extends('admin.layout')

@section('head_scripts')

@stop

@section('breadcrumbs')
    <li><a href="/admin/brand">Brands</a></li>
    <li><a href="/admin/brand/create">Create</a></li>
@stop

@section('title')
    Create new brand ( BRANDS AND ORGANIZATIONS WE WORK )
@stop

@section('content')

    <form action="" method="post" enctype="multipart/form-data">


        <div class="row">
            <div class="form-group col-md-6">
                <div class="form-group">
                    <label for="image">Photo</label>
                    <input class="form-control" type="file" name="image" id="image" value="">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="form-group col-md-6">
                <img id="uploaded_image" src="">
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Save</button>

        <input type="hidden" name="_token" value="{{ csrf_token() }}">


    </form>

@stop