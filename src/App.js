import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { navbar as NavBar } from './components/navbar/NavBar.js'
import { Categories } from './components/Categories/Categories.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Categories/>
        <ItemListContainer ItemListGroup="Item List Group"/>
      </Router>
    </div>
  );
}

export default App;
