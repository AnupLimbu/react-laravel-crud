<?php

namespace App\Repositories\Product;

use App\Models\Product;

class ProductRepository implements ProductInterface
{
    /**
     * @var ProductInterface
     */
    private $product;

    public function __construct(Product $product){
        $this->product=$product;

    }

    public function create(array $attributes)
    {
        // TODO: Implement add() method.
        $this->product->create($attributes);
    }

    public function destroy($id)
    {
        // TODO: Implement delete() method.
        $res=Product::where('id',$id)->delete();
        
    
    }

    public function viewAll()
    {
        // TODO: Implement viewAll() method.
         return $this->product->all();
        
    }

    public function update($id, $attributes)
    {
        // TODO: Implement update() method.
        $res=Product::where('id',$id)->update($attributes);
    }

    public function getById($id)
    {
        // TODO: Implement getById() method.
        return $this->product->find($id);
        
    }
}