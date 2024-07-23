// import React, { useState } from 'react';
import { useState } from 'react'
import Input from '../form/Input'
// import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles  from './ProductForm.module.css'

function ProductForm({ handleSubmit, btnText, projectData }) {
    const [product, setProduct] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(product)
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProduct({ ...product, category: {
           id: e.target.value,
           name: e.target.option[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Produto"
                name="product"
                placeholder="Insira o nome do produto"
                required handleOnChange={handleChange}
                value={product.product ? product.product : ''}
            />
            <Input
                type="number"
                text="Valor do Produto"
                name="value_product"
                placeholder="Insira o valor do produto"
                required handleOnChange={handleChange}
                value={product.value_product ? product.value_product : ''}
            />

            {/* <Select name="type_product" text="Selecione o tipo do produto" handleOnChange={handleCategory} value={project.category ? project.category.id : ''/> */}

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProductForm