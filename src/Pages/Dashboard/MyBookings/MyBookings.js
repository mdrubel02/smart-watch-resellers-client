import { Avatar,  Button, Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/User/UserContext';
import useTitle from '../../../Hooks/useTitle/useTitle';




const MyBookings = () => {
    const { user } = useContext(AuthContext);
    useTitle('my Bookings')
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [], refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })

    // const rows = bookings.map((row) => ({
    //     id: row._id,
    //     userName: row.userName,
    //     userEmail: row.userEmail,
    //     price: row.productPrice,
    //     number: row.phoneNumber,
    //     bookingImg: row.bookingImg
    // }))
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'userName', headerName: 'userName', width: 130 },
    //     { field: 'userEmail', headerName: 'userEmail', width: 130 },
    //     { field: 'price', headerName: 'price', width: 130 },
    //     { field: 'number', headerName: 'number', width: 130 },
    //     { field: 'number', headerName: 'number', width: 130 },
    //     {
    //         field: 'action',
    //         headerName: 'Action',
    //         width: 180,
    //         sortable: false,
    //         disableClickEventBubbling: true,

    //         renderCell: (params) => {
    //             const onClick = (e) => {
    //                 console.log('click')
    //             };

    //             return (
    //                 <Stack direction="row" spacing={2}>
    //                     <Button variant="outlined" color="warning" size="small" onClick={() => onClick()}>Edit</Button>
    //                 </Stack>
    //             );
    //         },
    //     }
    // ];
    const handleDeleteBookings = (booking) => {
        console.log(booking)
        fetch(`http://localhost:5000/bookings/${booking?._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast.success(`bookings ${booking.productName} deleted successfully`)
            }
        })
    }
    return (
        <Container>
            <Typography>{bookings.length ? " My Orders" : "There Are No Orders Available !!"}</Typography>
            {bookings &&<Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <td>{i + 1}</td>
                            <td> <Avatar alt="image" src={booking.bookingImg} /></td>
                            <td>{booking.productName}</td>
                            <td>{booking.productPrice}</td>

                            <td><Button variant="contained" color="warning" size="small" onClick={() => handleDeleteBookings(booking)} >Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>}
        </Container>
    );
};

export default MyBookings;