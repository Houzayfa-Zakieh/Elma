import './assets/styles/app.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Clients from './pages/Clients/Clients';
import Products from './pages/Products/Products';
import ProductsDetails from './pages/ProductsDetails/ProductsDetails';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productsDetails' element={<ProductsDetails/>}/>

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
