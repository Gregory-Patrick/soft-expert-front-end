import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import styles from './RegisterType.module.css';
import TypeBindForm from '../project/TypeBindForm';

function TypeBind() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [productTypes, setProductTypes] = useState([]);

    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message);
            navigate('/register-type', { replace: true });
        }
    }, [location, navigate]);

    useEffect(() => {
        fetch('http://localhost:8080/api/types', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            const types = Array.isArray(data) ? data : [data];
            setProductTypes(types);
        })
        .catch((err) => console.log(err));
    }, []);

    function createPut(product) {
        const payload = { ...product };

        fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((resp) => resp.json())
        .then((data) => {
            setMessage(data.message);
            setTimeout(() => {
                setMessage('');
            }, 3000);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Vincular - Tipo para o Produto</h1>
                <div className={styles.btn_container}>
                    <LinkButton to="/product" text="Produtos"> </LinkButton>
                </div>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Selecione o Tipo para o Produto</p>
                <TypeBindForm handleSubmit={createPut} btnText="Vincular" productTypes={productTypes} />
            </Container>
        </div>
    );
}

export default TypeBind;
