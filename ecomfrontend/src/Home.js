import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState, useEffect,React} from 'react'
import {Table} from 'react-bootstrap'

const Home = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        getData();
    },[])

    function deleteProduct(id){
        axios.delete('http://127.0.0.1:8000/api/delete/'+id).then((res)=>{
            alert('Item Has been Deleted');
            getData();
        })
    }
    async function getData(){
        axios.get('http://127.0.0.1:8000/api/allproduct').then((res)=>{
            setData(res.data);
        })
    }
        
    

    return (
        <div id="home-content">
            <h1>Our Products</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Product Size</th>
                        <th>Product Description</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Update/Delete</th>
                    </tr>
                </thead>
                <tbody>
              
                { 
                    data.map((item)=>
                   
                    <tr>
                        <td>{item.Id}</td>
                        <td>{item.ProductName}</td>
                        <td>{item.ProductType}</td>
                        <td>{item.ProductSize}</td>
                        <td>{item.ProductDescription}</td>
                        <td>{item.ProductQuantity}</td>
                        <td>{item.ProductPrice}</td>  
                        <td><Link to={'/updateproduct/'+item.Id}>Update</Link>| <span className='btn-link' onClick={()=>deleteProduct(item.Id)} href="">Delete</span></td>
                             
                    </tr>

                    )
                    
                }  
                 
                </tbody>
                    
            </Table>
        </div>
     );
}
 
export default Home;