import {withRouter} from 'react-router-dom'
import { useState , useEffect} from 'react';
import axios from 'axios' 
import { Form, Button } from 'react-bootstrap';

const UpdateProduct = (props) => {
    const [data, setData]=useState([]);
    const [productName, setProductName]=useState('');
    const [productType, setProductType]=useState('');
    const [productSize, setProductSize]=useState('');
    const [productDescription, setProductDescription]=useState('');
    const [productQuantity, setProductQuantity]=useState('');
    const [productPrice, setProductPrice]=useState('');
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/getbyid/'+props.match.params.id).then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    },[])
    let product=[productName,productType, productSize, productDescription, productQuantity, productPrice];
    function updateProduct(){
        axios.put('http://127.0.0.1:8000/api/update/'+props.match.params.id, {
            'id':props.match.params.id,
            'ProductName':productName,
            'ProductType':productType,
            'ProductSize':productSize,
            'ProductDescription':productDescription,
            'ProductQuantity':productQuantity,
            'ProductPrice':productPrice
        }).then((res)=>{
            alert("Success")

        })

    }
    return ( 
        <div id="update">
            <h1>Update Product</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name"  defaultValue={data.ProductName} onChange={(e)=>setProductName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Type" defaultValue={data.ProductType} onChange={(e)=>setProductType(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Size</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Size" defaultValue={data.ProductSize}  onChange={(e)=>setProductSize(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Product Description" defaultValue={data.ProductDescription} onChange={(e)=>setProductDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Quantity" defaultValue={data.ProductQuantity} onChange={(e)=>setProductQuantity(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Price" defaultValue={data.ProductPrice} onChange={(e)=>setProductPrice(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={updateProduct}>
                    Update
                </Button>
        </Form>


        </div>
     );
}
 
export default withRouter(UpdateProduct);