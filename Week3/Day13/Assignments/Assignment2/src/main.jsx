import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NavBar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Depts from './components/Depts.jsx'
import Employees from './components/Employees.jsx'
import NotFound from './components/NotFound.jsx'
import Details from './components/EmpDetails.jsx'
import Products from './components/Products.jsx'
import ProductDetails from './components/ProductDetails.jsx'

const routing = (
  <Router>
    <NavBar/>
    <Routes>
        <Route path="/" element={ <App/> }/>
        <Route path="/About" element={ <About/> }/>
        <Route path="/Contact" element={ <Contact/> }/>
        <Route path="/Depts" element={ <Depts/> }/>
        <Route path="/Employees" element={ <Employees/> }/>
        <Route path="/Details/:id" element={ <Details/> }/>
        <Route path="/Products" element={ <Products/> }/>
        <Route path="/ProductDetails/:id" element={ <ProductDetails/> }/>
        <Route path="*" element={ <NotFound/> }/>
    </Routes>
  </Router>
  );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {routing}
  </StrictMode>,
)
