import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from "../layout/Loading";
import styles from "./RegisterSale.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import RegisterSaleForm from '../project/RegisterSaleForm';
import SubmitLinkButton from '../layout/SubmitLinkButton';

function RegisterSale() {
    const [products, setProducts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [expandedProduct, setExpandedProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8080/api/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json())
            .then((data) => {
                if (data.success === false) {
                    setProducts([]);
                } else {
                    const productsArray = Array.isArray(data) ? data : [data];
                    setProducts(productsArray);
                }
                setRemoveLoading(true);
            })
            .catch((err) => console.log(err));
        }, 1000);
    }, []);

    const handleSelectProduct = useCallback((id, isSelected, quantity) => {
        setSelectedProducts((prev) => {
            const existingProductIndex = prev.findIndex(product => product.id === id);

            if (isSelected) {
                if (existingProductIndex !== -1) {
                    return prev.map((product, index) =>
                        index === existingProductIndex
                            ? { ...product, quantity }
                            : product
                    );
                } else {
                    const selectedProduct = products.find(product => product.id === id);
                    return selectedProduct
                        ? [...prev, { ...selectedProduct, quantity }]
                        : prev;
                }
            } else {
                return prev.filter((product) => product.id !== id);
            }
        });
    }, [products]);

    const handleToggleSelect = useCallback((id) => {
        setExpandedProduct((prev) => (prev === id ? null : id));
    }, []);

    const handleSubmit = useCallback(() => {
        console.log('Selected products:', selectedProducts); // Debug log
        navigate('/order-review', { state: { selectedProducts } });
    }, [navigate, selectedProducts]);

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Venda de Produtos</h1>
                <div className={styles.btn_container}>
                    <LinkButton to="/list-sale" text="Registro de Vendas" />
                    <LinkButton to="/product" text="Produtos" />
                    <LinkButton to="/" text="Home" />
                </div>
            </div>
            <Container customClass="start">
                {products.length > 0 &&
                    products.map((product) => (
                        <RegisterSaleForm
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            productType={product.product_type}
                            price={product.price}
                            handleSelectProduct={handleSelectProduct}
                            isSelected={expandedProduct === product.id}
                            handleToggleSelect={handleToggleSelect}
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && products.length === 0 && (
                    <p>Nenhum produto encontrado.</p>
                )}
                {selectedProducts.length > 0 && (
                    <div className={styles.submit}>
                        <SubmitLinkButton onClick={handleSubmit} text='Finalizar Pedido'/>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default RegisterSale;