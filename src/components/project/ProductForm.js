import { useState } from 'react';
import Input from '../form/Input';
import styles  from './ProductForm.module.css';
import SubmitButton from '../form/SubmitButton';

function ProductForm({ handleSubmit, btnText, projectData }) {
    const [product, setProduct] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(product)
        setProduct({})
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Produto"
                name="name"
                placeholder="Insira o nome do produto"
                required handleOnChange={handleChange}
                value={product.name ? product.name : ''}
            />
            <Input
                type="number"
                text="Valor do Produto"
                name="price"
                placeholder="Insira o valor do produto"
                required handleOnChange={handleChange}
                value={product.price ? product.price : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProductForm