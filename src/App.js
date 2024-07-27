import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Product from './components/pages/Product';
import Container from './components/layout/Container';
import RegisterTax from './components/pages/RegisterTax';
import EditProduct from './components/pages/EditProduct';
import RegisterType from './components/pages/RegisterType';
import RegisterProducts from './components/pages/RegisterProducts';
import RegisterSale from './components/pages/RegisterSale';
import OrderReview from './components/pages/OrderReview';
import ListSale from './components/pages/ListSale';
 
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
            <Route path='/edit-product/:id' element={<EditProduct />} />
            <Route path='/register-sale' element={<RegisterSale />} />
            <Route path='/order-review' element={<OrderReview />} />
            <Route path='/list-sale' element={<ListSale />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
