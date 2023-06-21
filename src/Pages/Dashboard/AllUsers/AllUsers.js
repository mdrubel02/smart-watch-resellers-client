import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { DataManage } from '../../../Context/DataManage/ManageUsers';
import useTitle from '../../../Hooks/useTitle/useTitle';

const AllUsers = () => {
    useTitle('all user')
    const {verifyUser} = useContext(DataManage)
    const url = `http://localhost:5000/allUsers`;
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    // const {AllUsers,refetch}= useContext(DataManage)
    const handleUserDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/allUsers/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('delete successfully user.')
                    refetch()
                }
            })
    }
    const verify = (user)=>{
        console.log('seller delete')
        verifyUser(user?.email)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch()
                }
            })
    }
    // const rows = users.map((row, i) =>({
    //     id: row._id,
    //     name: row.name,
    //     email: row.email,
    //     buyerOrSeller: row.userName,   
    // }))
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'name', headerName: 'Name', width: 130 },
    //     { field: 'email', headerName: 'Email', width: 130 },
    //     { field: 'buyerOrSeller', headerName: 'Buyer Or Seller', width: 130 },
    //     {
    //         field: 'verify',
    //         headerName: 'User Status',
    //         width: 180,
    //         sortable: false,
    //         disableClickEventBubbling: true,

    //         renderCell: (params) => {
    //             const onClick = (e) => {
    //                 const currentRow = params.row;
    //                 const id = currentRow.id
    //                 console.log(id)
    //                 fetch(`http://localhost:5000/users/admin/${id}`, {
    //                     method: 'PUT', 

    //                 })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if(data.modifiedCount > 0){
    //                         toast.success('Make admin successful.')
    //                         refetch()
    //                     }
    //                 })
    //             };

    //             return (
    //               <Stack direction="row" spacing={2}>
    //               { users?.role !== 'admin' &&   <Button variant="contained" color="warning" size="small" onClick={()=>onClick()}>Make Admin</Button>}
    //               </Stack>
    //             );
    //         },

    //       },
    //       {
    //         field: 'Admin',
    //         headerName: 'Admin',
    //         width: 180,
    //         sortable: false,
    //         disableClickEventBubbling: true,

    //         renderCell: (params) => {
    //             const onClick = (e) => {
    //                 const currentRow = params.row;
    //                 console.log(currentRow)
    //             };

    //             return (
    //               <Stack direction="row" spacing={2}>
    //                 <Button variant="contained" color="success" size="small" onClick={()=>onClick()}>Admin</Button>
    //               </Stack>
    //             );
    //         },

    //       }
    // ];
    return (
        // <Box sx={{ height: 500, width: '100%' }}>
        //     <DataGrid
        //         rows={rows}
        //         columns={columns}
        //         pageSize={10}
        //         rowsPerPageOptions={[10]}
        //         checkboxSelection
        //     />
        // </Box>
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
                        users.map((user, i) => <tr key={user?._id}>
                            <td>{i + 1}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.verify ? <><Button variant='contained' color='success' size='small' disabled>Verified</Button></>:<><Button variant='contained' color='primary' size='small'  onClick={()=>verify(user)}>Verify</Button></>}</td>
                            <td><Button  variant="contained" color="warning" size="small"  onClick={()=>handleUserDelete(user?._id)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Box>
    );
};

export default AllUsers;