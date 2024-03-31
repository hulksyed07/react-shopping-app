import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
