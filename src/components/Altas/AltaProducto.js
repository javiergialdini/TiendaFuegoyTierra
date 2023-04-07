import * as React from 'react';
import { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { collection, addDoc } from 'firebase/firestore';
import { db, storageDB } from '../../firebase/config'
import { ref, uploadBytes, getDownloadURL  } from 'firebase/storage'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const AltaProducto = () => {
    const [guardado, setGuardado] = useState(false)
    const [guardando, setGuardando] = useState(false)

    const { user } = useContext(LoginContext)

    const [arrayDescription, setArrayDesc] = useState([])

    const [description, setDescription] = useState('');

    const [category, setCategory] = useState('');

    const [values, setValues] = useState({
		name: '',
		descriptions: [],
		price: 0,
		img: '',
		category: category,
		stock:0
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: isNaN(e.target.value) ? e.target.value : Number(e.target.value)
        })
    }


    const handleArrayDescription = (e) => {
        // setArrayDesc(arrayDescription.push(e.target.value))
        setArrayDesc([...arrayDescription, e])
        console.log(arrayDescription)
        //values.descriptions.push(e.target.value)
    }

    const handleQuitarDescription = (desc) => {
        //console.log(desc)
        const newArray = arrayDescription.filter(item => item !== desc);
        console.log(arrayDescription)
        //console.log(arrayDescription)
        // Actualizar el estado arrayDescription con el nuevo array filtrado
        setArrayDesc(newArray);
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        values.category = e.target.value
        //console.log(values)
        //console.log(category)
    }


    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};


	const handleSubmit = () => {
        setGuardando(true)
        const storageRef = ref(storageDB, 'Productos/'+selectedFile.name)

        uploadBytes(storageRef, selectedFile)
            .then(snapshot => { console.log("se guarda")})
            .finally(() => {
                getDownloadURL(storageRef)
                .then((url) => {
                    values.img=url
                    console.log(values.img)
                    console.log(url)
                    console.log(arrayDescription)

                    values.descriptions= arrayDescription

                })
                .finally((url) => {
                    console.log(values)
                    const productosRef = collection(db, 'productos')
                    addDoc(productosRef, values)
                        .then((doc) => {
                            setGuardando(false)
                            setGuardado(true)
                            alert("GUARDADO")
                        })
                })
            })
    }


    if(!user.adminAcces)
    {
        return(
            <div style={{margin: '100px'}}>
                <Link to="/AltaProducto"
                    style={{
                        textDecoration: 'none',
                        variant:'h7',
                        color: 'inherit',
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' }}}>
                    <Button variant="outlined" style={{color:'black', fontWeight:'bold', fontSize:'20px'}} color="success" disabled>VOLVER</Button>
                </Link>
            </div>
        )
    }

    return (
        <div style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Box
                component="form"
                style={{marginTop:'100px', marginLeft: '50px', marginRight: '50px'}}
                sx={{ flexGrow: 1, maxWidth: 900, margin: 'auto'}}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <InputLabel id="Category" color='grey'>Category</InputLabel>
                    <Select
                        variant="outlined" color='grey'
                        style={{marginBottom:'20px', display: 'block' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                        >
                        <MenuItem value={'Aros'}>Aros</MenuItem>
                        <MenuItem value={'Anillos'}>Anillos</MenuItem>
                        <MenuItem value={'Collares'}>Collares</MenuItem>
                    </Select>

                    {/* <TextField style={{marginBottom:'20px', display: 'block' }} fullWidth id="Category" label="Category" variant="outlined" color='grey'/> */}
                    <TextField style={{marginBottom:'20px', display: 'block' }} name="name" fullWidth id="name" label="Name" variant="outlined" color='grey' onChange={handleInputChange}/>
                    <div style={{marginBottom:'20px', display:'flex', }}>
                        <TextField fullWidth id="Description" label="Description" variant="outlined" color='grey' onChange={(e) => setDescription(e.target.value)} value={description} />
                        {description
                            ? <Button variant="outlined" style={{color:'black', fontWeight:'bold', fontSize:'20px'}} color="success" onClick={() => handleArrayDescription(description)}>+</Button>
                            : <Button variant="outlined" style={{color:'black', fontWeight:'bold', fontSize:'20px'}} color="success" disabled>+</Button>
                        }
                    </div>
                    {arrayDescription.length > 0 ? <h6>Descriptions</h6> : <></>}
                    {
                        arrayDescription.map((desc, index) =>   <ul key={index}>
                                                                    <li>
                                                                        {desc}
                                                                        <IconButton style={{marginLeft: '20px'}} aria-label="delete" onClick={() => handleQuitarDescription(desc)}>
                                                                            <DeleteIcon style={{fontSize:'20px',  color:'red'}} />
                                                                        </IconButton>
                                                                    </li>
                                                                </ul>)
                    }
                    {arrayDescription.length > 0 ? <hr/> : <></>}
                    <div style={{marginBottom:'20px', display:'flex', }}>
                        <TextField style={{display: 'block', marginRight:'5px' }} name="price" fullWidth id="Price" label="Price" variant="outlined" color='grey' type="number" onChange={handleInputChange}/>
                        <TextField style={{display: 'block', marginLeft:'5px' }} name="stock" fullWidth id="Stock" label="Stock" variant="outlined" color='grey' type="number" onChange={handleInputChange}/>
                    </div>
                    {/* <TextField style={{marginBottom:'20px', display: 'block' }} fullWidth id="Img" label="Img" variant="outlined" color='grey'/> */}

                    <div>
                        <div style={{marginBottom:'20px', display:'flex', }}>
                            <input type="file" name="file" onChange={changeHandler} style={{color: 'inherit', display: 'none'}} id="file-input" />
                            <label htmlFor="file-input">
                                <Button variant="outlined" color="success" component="span" onChange={changeHandler}>
                                    Subir imagen
                                </Button>
                            </label>
                        </div>
                        {isSelected ? (
                            <div style={{marginBottom:'20px', display:'flex', }}>
                                <p>Filename: {selectedFile.name} - Filetype: {selectedFile.type} - Size in bytes: {selectedFile.size}</p>
                            </div>
                        ) : (
                            <></>
                        )}

                    </div>
                    <div>
                        {
                            !guardado
                            ?(
                            <div style={{ display:'flex', }}>
                                <Button style={{marginRight: '15px'}}variant="outlined" color="success" name="file" onClick={handleSubmit} >ACEPTAR</Button>
                                { guardando
                                    ?   <Box><CircularProgress /></Box>
                                    :   <></>
                                }
                            </div>
                            )
                            : (
                            <div style={{ display:'flex', }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit', marginRight: '15px'}} to="/AltaProducto"><Button variant="outlined" color="success" name="file" >VOLVER</Button></Link>
                                { !guardando
                                    ?   <Box><CircularProgress variant="determinate" value={100} color="success"/></Box>
                                    :   <></>
                                }
                                </div>
                            )
                        }
                    </div>
                </FormControl>
            </Box>
        </div>
    );
}