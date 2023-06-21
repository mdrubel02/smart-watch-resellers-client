import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle/useTitle';

const Admin = () => {
     useTitle('Admin panel')
    const url = `hhttp://localhost:3000/allUsers`;
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })

    const handleAdmin = (id) => {
        console.log(id)
        fetch(`https://watch-server-inky.vercel.app/users/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch()
                }
            })
    }
    return (
        <Box>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Buyer OR Seller</th>
                        <th>Make Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.userName}</td>
                            <td>{user?.rode !== 'admin' && <Button  variant="contained" color="success" size="small"  onClick={()=>handleAdmin(user?._id)}>Make Admin</Button>}</td>
                            <td><Button  variant="contained" color="warning" size="small">Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Box>
    );
};

export default Admin;