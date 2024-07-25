import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import styles from './RegisterType.module.css';
import NewTypeForm from '../project/NewTypeForm';

function RegisterType() {
    const navigate = useNavigate()
    const location = useLocation()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message);
            navigate('/register-type', { replace: true });
        }
    }, [location, navigate])

    function createPost(product) {
        fetch('http://localhost:8080/api/types', {
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
                <h1>Cadastrar - Tipo</h1>
                <div className={styles.btn_container}>
                    <LinkButton to="/register-product" text="Cadastrar Produto"> </LinkButton>
                    <LinkButton to="/register-tax" text="Cadastrar Impostos"> </LinkButton>
                </div>
            </div>
            {message && <Message type="success" msg={message} />}

            <Container customClass="start">
                <p>Cadastro do tipo de cada produto</p>
                <NewTypeForm handleSubmit={createPost} btnText="Cadastrar" />
            </Container>
        </div>
    )
}

export default RegisterType