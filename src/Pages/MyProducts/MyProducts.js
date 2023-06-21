import { Avatar, Button, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/User/UserContext';
import useTitle from '../../Hooks/useTitle/useTitle';
import MyProductsEdit from './MyProductsEdit';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([])
    useTitle('My Products')
    console.log(user?.email)
    const url = `http://localhost:3000/addProducts?email=${user?.email}`;
    const {data: MyProducts= [],  refetch} = useQuery({
        queryKey: ['addProducts', user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
   console.log(MyProducts)
    const handleClickOpen = (product) => {
        setProducts(product);
        setOpen(true);
    };

    const handleClose = () => {
        // console.log(product);
        setOpen(false);
    };
    const handleDeleteProduct = (product)=>{
        console.log(product)
        fetch(`http://localhost:3000/addProducts/${product?._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast.success(`Doctor ${product.name} deleted successfully`)
            }
        })
    }
    return (
        <Container mt={5}>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MyProducts.map((product, i) => <tr key={product._id}>
                            <td>{i + 1}</td>
                            <td> <Avatar alt="image" src={product.image} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><Button variant="contained" color="success" size="small" onClick={() => handleClickOpen(product)}>Edit</Button></td>
                            <td><Button variant="contained" color="warning" size="small" onClick={()=>handleDeleteProduct(product)} >Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <MyProductsEdit
            open={open}
            products={products}
            handleClose={handleClose}
            refetch={refetch}
            />
        </Container>
    );
};

export default MyProducts;