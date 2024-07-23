import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ProductTypeTax from './components/pages/ProductTypeTax'
import TypeOfProduct from './components/pages/TypeOfProduct'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
 

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Products' element={<Products />} />
            <Route exact path='/TypeOfProduct' element={<TypeOfProduct />} />
            <Route exact path='/ProductTypeTax' element={<ProductTypeTax />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
