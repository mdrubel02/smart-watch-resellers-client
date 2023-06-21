import { Avatar, Box, Button, Divider, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, Radio, RadioGroup, Stack, styled, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/User/UserContext';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';


const LoginPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    width: '280px',
    margin: '20px auto',
}));
const SingUp = () => {
    const { loading, signInWithGoogle, createUser, nameAndPhotoUpdate } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || '/'
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const handleSignUp = (e) => {
        e.preventDefault();
        const from = e.target
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const userName = from.userName.value;


        //create user
        createUser(email, password)

            .then((userCredential) => {

                const user = userCredential.user
                //name update
                nameAndPhotoUpdate(name)
                    .then(() => {
                        console.log('update name');
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                if (loading) {
                    return <Loading></Loading>
                }
                navigate(form, { replace: true })
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);

            })
        saveUser(name, email, userName);
        e.target.reset();
    }
        //google sign up 
        const handleGoogle = () => {
            signInWithGoogle()
                .then((result) => {
                    const user = result.user;
                    saveUserSocialLogin(user?.displayName, user?.email, user?.photoURL);
                    navigate(form, { replace: true })
                })
                .then((error) => {
                    console.log(error);
                })
        }
    const saveUser = (name, email, userName) => {
        console.log(name, email, userName)
        const user = {
            name: name,
            email: email,
            userName: userName
        };
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully login', {
                    duration: 4000,
                    position: 'top-center',
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    const saveUserSocialLogin = (name, email, image,) => {
        const user ={
            name: name,
            email: email,
            userName: "Buyer",
            image: image

        }
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully login', {
                    duration: 4000,
                    position: 'top-center',
                })

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Grid>
            <LoginPaper elevation={10}

            >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonOutlineIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSignUp}>
                    <TextField color='secondary'
                        id="outlined-multiline-static"
                        autoComplete='off'
                        name='name'
                        label="Username"
                        type='text'
                        sx={{ paddingBottom: '1rem' }}
                        placeholder='Enter username' fullWidth required />
                    <TextField color='secondary'
                        id="outlined-multiline-static"
                        autoComplete='off'
                        name='email'
                        label="Email"
                        type='email'
                        sx={{ paddingBottom: '1rem' }}
                        placeholder='Enter Email' fullWidth required />
                    <FormControl variant="outlined" fullWidth color='secondary'>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            name='password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            required
                        />
                    </FormControl>
                    <Box display='flex' >
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="userName"
                                color='secondary'
                            >
                                <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
                                <FormControlLabel value="Buyer" color='secondary' control={<Radio />} label="Buyer" />

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "secondary.light",
                    },
                    color: 'primary'
                }}>OR</Divider>
                <Stack direction='row' spacing={1}>
                    <GoogleIcon color='secondary' sx={{ fontSize: '2.2rem', }} />
                    <Typography onClick={handleGoogle} sx={{ cursor: 'pointer', lineHeight: '2.5rem' }} color='secondary'>
                        Login With Google
                    </Typography>

                </Stack>
                <Typography > Do you have an account ?
                    <Link component={RouterLink} to='/login' color={'secondary'}>
                        Login
                    </Link>
                </Typography>
            </LoginPaper>
        </Grid>
    );
};

export default SingUp;