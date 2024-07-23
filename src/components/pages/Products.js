import { useNavigate } from 'react-router-dom';
import ProductForm from '../project/ProductForm'
import styles from './Products.module.css'

function Products() {

    const navigate  = useNavigate()

    function createPost(product) {
        product.cost = 0
        product.services = []

        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then((resp) => resp.json())
        .then((data) => {

            console.log('Data received:', data); // Verifique os dados recebidos
            console.log('Navigating to /TypeOfProduct');

            navigate('/Home', { state: { message: 'Produto cadastrado com sucesso!'} });
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproduct_container}>
            <h1>Cadastrar Produtos</h1>
            <p>Cadastre seus produtos</p>
            <span>Produtos com cadastro incompletos não serão disponiveis para venda*</span>
            <ProductForm handleSubmit={createPost} btnText="Cadastrar Produto" />
        </div>
    )
}

export default Products