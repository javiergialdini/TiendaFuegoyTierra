import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { NavBar } from './components/navbar/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { PruebaAsync } from './components/EjerciciosClase/Clase06'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PokeApi } from './components/PokeApi/PokeApi';
import './components/PokeApi/PokeApi.css'
import { PrimarySearchAppBar } from './components/PruebaMuiComponent/PruebaMuiComponent'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Router>
        <NavBar/>
          {/*<ItemListContainer ItemListGroup="Item List Group"/>*/}
          <div>
            <PokeApi/>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
