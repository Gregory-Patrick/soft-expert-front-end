import { useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './ProductForm.module.css';
import SubmitButton from '../form/SubmitButton';

function Taxform({ handleSubmit, btnText, projectData, productTypes }) {
    const [product, setProduct] = useState(projectData || {});

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
            <Input
                type="number"
                text="PIS"
                name="pis"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={product.pis || ''}
            />
            <Input
                type="number"
                text="CONFINS"
                name="confins"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={product.confins || ''}
            />
            <Input
                type="number"
                text="ICMS"
                name="icms"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={product.icms || ''}
            />
            <Input
                type="number"
                text="IPI"
                name="ipi"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={product.ipi || ''}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default Taxform;
