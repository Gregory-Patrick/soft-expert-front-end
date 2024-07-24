import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductForm from '../project/ProductForm'
import styles from './Products.module.css'
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import Container from '../layout/Container';

function Products() {

    const navigate = useNavigate()
    const location = useLocation()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message);
            navigate('/Products', { replace: true });
        }
    }, [location, navigate])

    function createPost(product) {
        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then((resp) => resp.json())
        .then((data) => {
            setMessage(data.message)
            setTimeout(() => {
                setMessage('')
            }, 3000)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Cadastrar Produtos</h1>
                <LinkButton to="/TypeOfProduct" text="Tipos de Produtos"> </LinkButton>
            </div>
            {message && <Message type="success" msg={message} />}

            <Container customClass="start">
                    <p>Cadastre seus produtos</p>
                        <ProductForm handleSubmit={createPost} btnText="Cadastrar Produto" />
            </Container>
        </div>
    )
}

export default Products