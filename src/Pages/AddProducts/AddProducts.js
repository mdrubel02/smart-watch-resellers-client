import React,{ useContext } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from '@mui/material';
import { AuthContext } from '../../Context/User/UserContext';
import toast from 'react-hot-toast';


const AddProducts = () => {
    const { user, } = useContext(AuthContext)
    console.log(user?.email)
    const handleAddProducts = (e) => {
        e.preventDefault()
        const email = user?.email;
        const from = e.target
        const name = from.name.value;
        const price = from.price.value;
        const phone = from.phone.value;
        const productCondition= from.productCondition.value;
        const sales = from.sales.value;
        const image = from.image.value;
        const description = from.description.value;

        const data = {
            email: email,
            name: name,
            price: price,
            phone: phone,
            productCondition: productCondition,
            image: image,
            description: description,
            sales: sales
        }
        
        fetch('http://localhost:3000/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        
                toast.success('Successfully bookings', {
                    duration: 4000,
                    position: 'top-center',})        
        })
        .catch(error=>{
            console.log(error)
        })

        e.target.reset();
    }

    return (
        <Container>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                maxWidth={600}
                margin='auto'
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    ":hover": {
                        boxShadow: '10px 10px 20px #ccc'
                    }
                }}
            >
                <form onSubmit={handleAddProducts}>
                    <Grid container >
                        <Grid lg={12} align='center'>
                            <h2>Add Product</h2>
                        </Grid>
                        <Grid Item lg={6} >
                            <TextField color='secondary'
                                id="outlined-multiline-static"
                                autoComplete='off'
                                name='name'
                                label="Product Name"
                                type='text'
                                sx={{ paddingBottom: '1rem' }}
                                placeholder='Enter Product Name' fullWidth required />
                            <TextField color='secondary'
                                id="outlined-multiline-static"
                                autoComplete='off'
                                name='price'
                                label="Product Price"
                                type='number'
                                sx={{ paddingBottom: '1rem' }}
                                placeholder='Enter Product Price' fullWidth required />
                            <TextField color='secondary'
                                id="outlined-multiline-static"
                                autoComplete='off'
                                name='phone'
                                label="Phone Number"
                                type='phone number'
                                sx={{ paddingBottom: '1rem' }}
                                placeholder='Enter Phone Number' fullWidth required />

                            <Box display='flex' >
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Product Condition</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="productCondition"
                                        color='secondary'
                                    >
                                        <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                                        <FormControlLabel value="Good" color='secondary' control={<Radio />} label="Good" />
                                        <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid Item lg={6} >
                            <TextField color='secondary'
                                id="outlined-multiline-static"
                                autoComplete='off'
                                name='sales'
                                label="Location"
                                type='text'
                                sx={{ paddingBottom: '1rem' }}
                                placeholder='Enter Location' fullWidth required />
                            <TextField color='secondary'
                                id="outlined-multiline-static"
                                autoComplete='off'
                                name='image'
                                label="Image Link"
                                type='text'
                                sx={{ paddingBottom: '1rem' }}
                                placeholder='Enter Your Image Link' fullWidth required />
                            <TextField
                            color='secondary'
                                sx={{ paddingBottom: '1rem' }}
                                id="outlined-multiline-static"
                                label="Description"
                                type='text'
                                name='description'
                                multiline
                                rows={3}
                                placeholder='About Your Product' fullWidth required 
                            />
                            <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>

    );
};

export default AddProducts;