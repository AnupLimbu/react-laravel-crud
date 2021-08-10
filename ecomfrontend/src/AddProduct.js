import {Form,  Button} from 'react-bootstrap'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const AddProduct = () => {
    const [productName, setProductName]=useState('');
    const [productType, setProductType]=useState('');
    const [productSize, setProductSize]=useState('');
    const [productDescription, setProductDescription]=useState('');
    const [productQuantity, setProductQuantity]=useState('');
    const [productPrice, setProductPrice]=useState('');
    const history=useHistory();

    let product=[productName,productType,productSize,productDescription,productQuantity,productPrice]
    
    function addProd(){
        console.log({'ProductName':productName,'ProductPrice':productPrice})
        console.log('Button Clicked')

        // axios({
        //     method: 'POST',
        //     url: `http://127.0.0.1:8000/api/addproduct`,
        //     data: {
        //         'ProductName':productName,
        //         'ProductType':productType,
        //         'ProductSize':productSize,
        //         'ProductDescription':productDescription,
        //         'ProductQuantity':productQuantity,
        //         'ProductPrice':productPrice
        //     },
        //     headers: {
        //        'Access-Control-Allow-Origin': '*',
        //        'Content-type': 'application/json;charset=utf-8',
        //     }
            
        // })
        axios.post(`http://127.0.0.1:8000/api/addproduct`,
            {
                 'ProductName':productName,
                 'ProductType':productType,
                 'ProductSize':productSize,
                 'ProductDescription':productDescription,
                 'ProductQuantity':productQuantity,
                 'ProductPrice':productPrice
             }).then((res)=>{
                history.push('/addsuccess');
            })
        
    }
    
    return ( 
    <div id="add-content">
    <h1>Add Product</h1>
        <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" onChange={(e)=>setProductName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Type" onChange={(e)=>setProductType(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Size</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Size" onChange={(e)=>setProductSize(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Product Description" onChange={(e)=>setProductDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Quantity" onChange={(e)=>setProductQuantity(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Price" onChange={(e)=>setProductPrice(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={addProd} >
                    Submit
                </Button>
        </Form>
        </div>
     );
}
 
export default AddProduct;