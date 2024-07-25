import { useState } from 'react';
import Input from '../form/Input';
import styles  from './NewTypeForm.module.css';
import SubmitButton from '../form/SubmitButton';

function NewTypeForm({ handleSubmit, btnText, projectData }) {
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
                text="Nome do Tipo"
                name="name"
                placeholder="Insira o nome do tipo para os seus produtos"
                required handleOnChange={handleChange}
                value={product.name ? product.name : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default NewTypeForm