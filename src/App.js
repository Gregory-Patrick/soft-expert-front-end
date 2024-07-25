import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import RegisterProducts from './components/pages/RegisterProducts'
import Product from './components/pages/Product'
import RegisterTax from './components/pages/RegisterTax'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Type from './components/pages/Type'
import RegisterType from './components/pages/RegisterType'
 
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/register-product' element={<RegisterProducts />} />
            <Route path='/register-type' element={<RegisterType />} />
            <Route path='/register-tax' element={<RegisterTax />} />
            <Route path='/product' element={<Product />} />
            <Route path='/type/:id' element={<Type />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
