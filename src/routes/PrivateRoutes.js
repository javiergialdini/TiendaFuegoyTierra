import '../App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import  { NavBar } from '../components/navbar/NavBar.js'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Nosotros } from '../components/Nosotros/Nosotros'
import { Contacto } from '../components/Contacto/Contacto'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'
import { Checkout } from '../components/Checkout/Checkout'
import { AltaProducto } from '../components/Altas/AltaProducto'


export const PrivateRoutes = () => {

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
                <Route path="/Checkout" element={<Checkout/>}/>
                <Route path="/altaProducto" element={<AltaProducto/>}/>
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </>
    )
}