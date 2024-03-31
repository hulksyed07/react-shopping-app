import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/">Products</Link></li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
