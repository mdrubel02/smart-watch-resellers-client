import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Paper, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';


const LoginPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    width: '280px',
    margin: '20px auto',
}));
const MyProductsEdit = ({ open, products, handleClose, refetch }) => {

console.log(products)
    const handleUpdateProducts = (e) => {
        e.preventDefault()
        const from = e.target
        const price = from.price.value;
        const phone = from.phone.value;
        const sales = from.sales.value;
        const data = {
           
            price: price,
            phone: phone,
            sales: sales
        }
        console.log(data)
        fetch(`http://localhost:3000/addProducts/${products?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Successfully login', {
                        duration: 4000,
                        position: 'top-center', 
                        
                    })
                    refetch()
                }
                else{
                    toast.error(data.message);
                }
               
               
            })
            .catch(error => {
                console.log(error)
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
                    <Typography>UpDate Your Products</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid>
                            <LoginPaper elevation={10}
                            >
                                <Grid align='center'>

                                </Grid>
                                <form onSubmit={handleUpdateProducts}>
                                    <TextField color='secondary'
                                        id="outlined-multiline-static"
                                        autoComplete='off'
                                        name='price'
                                        label="Product Price"
                                        defaultValue={products?.price}
                                        type='number'
                                        sx={{ paddingBottom: '1rem' }}
                                        placeholder='Enter Product Price' fullWidth required />
                                    <TextField color='secondary'
                                        id="outlined-multiline-static"
                                        autoComplete='off'
                                        name='phone'
                                        label="Phone Number"
                                        defaultValue={products?.phone}
                                        type='phone number'
                                        sx={{ paddingBottom: '1rem' }}
                                        placeholder='Enter Phone Number' fullWidth required />
                                    <TextField color='secondary'
                                        id="outlined-multiline-static"
                                        autoComplete='off'
                                        name='sales'
                                        label="Location"
                                        defaultValue={products?.sales}
                                        type='text'
                                        sx={{ paddingBottom: '1rem' }}
                                        placeholder='Enter Location' fullWidth required />
                                  
                                   
                                    <Button sx={{ marginTop: '.8rem' }} type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
                                </form>

                            </LoginPaper>
                        </Grid>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </Box>
    );
};

export default MyProductsEdit;