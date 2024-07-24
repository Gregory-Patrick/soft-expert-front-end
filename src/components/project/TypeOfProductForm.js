import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles  from './ProductForm.module.css'

function TypeOfProductForm({ handleSubmit, btnText, projectData }) {
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
                text="Tipo do Produto"
                name="name"
                placeholder="Insira o nome para o tipo do produto"
                required handleOnChange={handleChange}
                value={product.name ? product.name : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default TypeOfProductForm