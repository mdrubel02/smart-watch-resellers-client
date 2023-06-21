import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { DataManage } from '../../../Context/DataManage/ManageUsers';
import useTitle from '../../../Hooks/useTitle/useTitle';

const Sellers = () => {
    const {verifyUser} = useContext(DataManage)
    useTitle('Sellers');
    const url = `http://localhost:5000/allSellers`
    const {data: sellers = [], refetch }= useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    const verify = (seller)=>{
        console.log('seller delete')
        verifyUser(seller?.email)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch()
                }
            })
    }
    const handleUserDelete =(seller)=>{
        console.log('seller delete')
        // verifyUser(seller)
    }
    return (
        <div>
            <h1>this is seller page</h1>
            <p>{sellers.length}</p>
            <Box>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verification Status</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <tr key={seller?._id}>
                            <td>{i + 1}</td>
                            <td>{seller?.name}</td>
                            <td>{seller?.email}</td>
                            <td>{seller?.verify ? <><Button variant='contained' color='success' size='small'>Verified</Button></>:<><Button variant='contained' color='primary' size='small'  onClick={()=>verify(seller)}>Verify</Button></>}</td>
                            <td><Button  variant="contained" color="warning" size="small"  onClick={()=>handleUserDelete(seller)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Box>
        </div>
    );
};

export default Sellers;