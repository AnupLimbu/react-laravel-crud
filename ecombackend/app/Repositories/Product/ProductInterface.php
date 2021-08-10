<?php

namespace App\Repositories\Product;

interface ProductInterface
{
    public function create(array $attributes);

    public function destroy($id);

    public function viewAll();

    public function update($id, $attributes);

    public function getById($id);
}
