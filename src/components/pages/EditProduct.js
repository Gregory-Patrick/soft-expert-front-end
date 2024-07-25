import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import styles from './RegisterType.module.css';
import EditProductForm from '../project/EditProductForm';

function EditProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [productTypes, setProductTypes] = useState([]);
    const [productData, setProductData] = useState(null);

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

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProductData(data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    function edit(product) {
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
                navigate('/product');
            }, 500);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Edite o Produto</h1>
                <div className={styles.btn_container}>
                    <LinkButton to="/product" text="Produtos"> </LinkButton>
                </div>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Atualize os dados</p>
                {productData && (
                    <EditProductForm
                        handleSubmit={edit}
                        btnText="Atualizar"
                        productTypes={productTypes}
                        projectData={productData}
                    />
                )}
            </Container>
        </div>
    );
}

export default EditProduct;
