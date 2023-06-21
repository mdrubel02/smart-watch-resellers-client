import React, { useContext } from 'react';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Paper, styled, TextField, Typography } from '@mui/material';
import { AuthContext } from '../../../../../Context/User/UserContext';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import useTitle from '../../../../../Hooks/useTitle/useTitle';



const LoginPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    width: '280px',
    margin: '20px auto',
}));
const BookingModal = ({ open, bookings, handleClose}) => {
    const { user } = useContext(AuthContext)
   useTitle('bookings')
    const time = format(new Date(), 'PP')
    const {name,price} = bookings;
    const handleBookingsUser =(e)=>{
        e.preventDefault()
        
        const userName = user?.displayName;
        const userEmail = user?.email;
        const productName = name;
        const productPrice = price;
        const phoneNumber = e.target.number.value;
        const bookingTime = time;
      
        const buyerBooking = {
            userName: userName,
            userEmail:userEmail,
            productName: productName,
            productPrice: productPrice,
            phoneNumber: phoneNumber,
            bookingTime: bookingTime,
            bookingImg: bookings.picture
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyerBooking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
                if(data.acknowledged){
                    toast.success('Successfully bookings', {
                        duration: 4000,
                        position: 'top-center',}) 
                }
                else{
                    toast.error(data.message);
                }
                      
        })
        .catch(error=>{
           toast.error(error.message)
            
        })
       
    }
    return (
        <Box>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography>{name}</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid>
                        <LoginPaper elevation={10}
                        >
                            <Grid align='center'>

                            </Grid>
                            <form onSubmit={handleBookingsUser}>
                                <TextField color='secondary'
                                    id="outlined-multiline-static"
                                    label="Username"
                                    name='userName'
                                    defaultValue={user?.displayName}
                                    disabled
                                    sx={{ paddingBottom: '1rem' }}
                                    placeholder='Enter username' fullWidth required red />
                                <TextField color='secondary'
                                    id="outlined-multiline-static"
                                    label="UserEmail"
                                    name='userEmail'
                                    defaultValue={user?.email}
                                    disabled
                                    sx={{ paddingBottom: '1rem' }}
                                    placeholder='Enter username' fullWidth required red />
                                <TextField color='secondary'
                                    id="outlined-multiline-static"
                                    label="itemsName"
                                    name='itemsName'
                                    defaultValue={name}
                                    disabled
                                    sx={{ paddingBottom: '1rem' }}
                                    placeholder='Enter username' fullWidth required red />
                                <TextField color='secondary'
                                    id="outlined-multiline-static"
                                    label="price"
                                    name='product-price'
                                    defaultValue={price}
                                    disabled
                                    sx={{ paddingBottom: '1rem' }}
                                    placeholder='Enter username' fullWidth required red />
                                <TextField color='secondary'
                                    id="outlined-multiline-static"
                                    label="Phone-Number"
                                    name= 'number'
                                    sx={{ paddingBottom: '1rem' }}
                                    placeholder='Enter Phone number' fullWidth required red />
                                <Button sx={{marginTop: '.8rem'}} type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
                            </form>

                        </LoginPaper>
                    </Grid>
                </DialogContentText>
            </DialogContent>

        </Dialog>
    </Box>
    );
};

export default BookingModal;