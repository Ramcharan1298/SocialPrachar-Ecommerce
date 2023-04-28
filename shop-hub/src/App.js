import './App.css';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import Product from './Components/Product';
import Products from './Components/Products';
import Signup from './Components/Signup';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="Products" element={<Products/>}/>
          <Route path="Products/:id" element={<Product/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Cart" element={<Cart/>}/>
          <Route path='Checkout' element={<Checkout/>}/>
          <Route path='Payment' element={<Payment/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
