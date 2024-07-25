import { useState } from 'react';
import Select from '../form/Select';
import styles from './ProductForm.module.css';
import SubmitButton from '../form/SubmitButton';

function TypeBindForm({ handleSubmit, btnText, productTypes }) {
    const [product, setProduct] = useState({});

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(product);
        setProduct({});
    };

    function handleCategory(e) {
        setProduct({ 
            ...product, 
            id_product_type: e.target.value 
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Select 
                name="id_product_type" 
                text="Selecione o Tipo" 
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

export default TypeBindForm;
