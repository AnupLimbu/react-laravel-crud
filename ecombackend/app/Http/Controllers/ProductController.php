<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStore;
use App\Repositories\Product\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @var ProductRepository
     */
    private $product;

    public function __construct(ProductRepository $product){
        $this->product=$product;
    }


    
    public function all(){
        return $this->product->viewAll();
    }



    public function create(ProductStore $request){

        $this->product->create($request->all());
    }

    public function delete($id){

        $this->product->destroy($id);
       
    }

    public function update($id, Request $request){
        $attr=$request->all();
        $this->product->update($id, $attr);
    }
    public function getById($id){
        return $this->product->getById($id);
    }

}
