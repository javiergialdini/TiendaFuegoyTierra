import { Routes, Route, Navigate} from 'react-router-dom';
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen/RegisterScreen'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js'
import { Nosotros } from '../components/Nosotros/Nosotros'
import { Contacto } from '../components/Contacto/Contacto'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'
import { NavBar } from '../components/navbar/NavBar.js'

export const PublicRoutes = () => {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <ItemListContainer ItemListGroup="Item List Group"/> }/>
                <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/login" element= { <LoginScreen />}/>
                <Route path="register" element={<RegisterScreen/>}/>
                <Route path="/" element= { <Navigate to="/login" />}/>
            </Routes>
        </>

    )
}