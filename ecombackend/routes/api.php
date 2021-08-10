<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/allproduct','App\Http\Controllers\ProductController@all');
Route::post('/addproduct','App\Http\Controllers\ProductController@create');
Route::delete('delete/{id}','App\Http\Controllers\ProductController@delete');
Route::put('update/{id}','App\Http\Controllers\ProductController@update');
Route::get('getbyid/{id}','App\Http\Controllers\ProductController@getById');