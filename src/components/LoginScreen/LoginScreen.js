import FormControl from '@mui/material/FormControl';
import  { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext';

export const LoginScreen = () => {
    const { user, tryLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
    }

    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div
        style={{ marginTop:'100px',
                height:'600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/tiendafuegoytierra.appspot.com/o/Fondo%2Fjacob-stone--c-Q8_GJVao-unsplash.jpg?alt=media&token=505474fc-f9b8-485c-8824-1693f1514295")' ,
                backgroundSize: 'cover',
                }}>
            <Card
                component="div"
                sx={{ width: '500px', margin: 'auto', height:'50%', opacity: 0.9}}
                noValidate
                autoComplete="off"
            >
                <div style={{maxWidth:'80%', margin:'auto', marginTop:'35px'}}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Typography
                                component="div"
                                noWrap style={{marginBottom:'10px', fontSize:'25px', color: 'grey'}}>
                                    Iniciar sesion
                            </Typography>
                            <TextField
                                style={{marginBottom:'20px', display: 'block' }}
                                value={values.email} name="email" fullWidth id="email" label="email"
                                variant="outlined" color='grey' onChange={handleOnChange}/>
                            <TextField
                                style={{marginBottom:'20px', display: 'block' }}
                                value={values.password} name="password" fullWidth id="password" label="password"
                                variant="outlined" color='grey' onChange={handleOnChange} type='password'/>
                            <Button type='submit' color='inherit' variant='outlined'>INGRESAR</Button>
                        </FormControl>
                    </form>
                </div>
            </Card>
        </div>
    )
}