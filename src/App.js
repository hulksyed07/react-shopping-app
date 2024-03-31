import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useCart from './hooks/useCart';

function App() {
  const { cartProducts, addProductToCart, incrementQuantityInCart, decrementQuantityInCart, getCartProduct } = useCart();

  return (
    <Router>
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
          <Route path="/" element={<ProductList addProductToCart={addProductToCart} incrementQuantityInCart={incrementQuantityInCart} decrementQuantityInCart={decrementQuantityInCart} getCartProduct={getCartProduct} />} />
          <Route path="/cart" element={<Cart cartProducts={cartProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
