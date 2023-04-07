import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CartProvider } from './context/CartContext'
import { LoginProvider } from './context/LoginContext'
import { AppRouter } from './routes/AppRouter'

function App() {



  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
