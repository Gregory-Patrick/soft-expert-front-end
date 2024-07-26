import { useState, useEffect } from 'react';
import Loading from "../layout/Loading";
import Message from "../layout/Message";
import styles from "./Product.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProductCard from "../project/ProductCard";

function Product() {
    const [products, setProducts] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [productMessage, setProjectMessage] = useState('');

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

    function removeProduct(id) {
        fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(() => {
            setProducts(products.filter((product) => product.id !== id));
            setProjectMessage('Produto removido com sucesso!');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Produtos</h1>
                <LinkButton to="/register-product" text="Cadastrar Produto" />
            </div>
            {productMessage && <Message type="success" msg={productMessage} />}
            <span className={styles.span}>Produto com cadastro incompleto não será disponível para venda*</span>
            <Container customClass="start">
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            productType={product.product_type}
                            price={product.price}
                            productTax={product.product_tax}
                            handleRemove={removeProduct}
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && products.length === 0 && (
                    <p>Nenhum produto cadastrado.</p>
                )}
            </Container>
        </div>
    );
}

export default Product;
