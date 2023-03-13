import './App.css';
import { BrowserRouter, Routes, Switch, Route, Navigate} from 'react-router-dom';
import  { NavBar } from './components/navbar/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { PokeApi } from './components/PokeApi/PokeApi';
import './components/PokeApi/PokeApi.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Nosotros } from './components/Nosotros/Nosotros'
import { Contacto } from './components/Contacto/Contacto'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer ItemListGroup="Item List Group"/> }/>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            {/* <Route path="/pokeapi" element={<PokeApi/>}/> */}
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/>
            {/* <Route path="*" element={<Error404 />}/> */}
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
