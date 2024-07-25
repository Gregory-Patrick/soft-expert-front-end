import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './ProductForm.module.css';
import SubmitButton from '../form/SubmitButton';

function EditProductForm({ handleSubmit, btnText, projectData, productTypes }) {
    const [product, setProduct] = useState(projectData || {});

    useEffect(() => {
        if (projectData) {
            setProduct(projectData);
        }
    }, [projectData]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(product);
        setProduct({});
    };

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProduct({
            ...product,
            id_product_type: e.target.value
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Produto"
                name="name"
                placeholder="Insira o nome do produto"
                required
                handleOnChange={handleChange}
                value={product.name || ''}
            />
            <Input
                type="number"
                text="Valor do Produto"
                name="price"
                placeholder="Insira o valor do produto"
                required
                handleOnChange={handleChange}
                value={product.price || ''}
            />
            <Select
                name="id_product_type"
                text="Selecione o Tipo do Produto"
                handleOnChange={handleCategory}
                value={product.id_product_type || ''}
                options={productTypes.map(type => ({
                    value: type.id,
                    label: type.name
                }))}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default EditProductForm;
