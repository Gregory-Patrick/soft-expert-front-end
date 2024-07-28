import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './ProductForm.module.css';
import SubmitButton from '../form/SubmitButton';

function Taxform({ handleSubmit, btnText, projectData, productTypes }) {
    const [product, setProduct] = useState(projectData || {});
    const [taxes, setTaxes] = useState({
        pis: product.pis || 0,
        confins: product.confins || 0,
        icms: product.icms || 0,
        ipi: product.ipi || 0
    });

    useEffect(() => {
        if (product.id_product_type) {
            fetch(`http://localhost:8080/api/tax/${product.id_product_type}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (data) {
                    setTaxes({
                        pis: data.pis || 0,
                        confins: data.confins || 0,
                        icms: data.icms || 0,
                        ipi: data.ipi || 0
                    });
                } else {
                    setTaxes({
                        pis: 0,
                        confins: 0,
                        icms: 0,
                        ipi: 0
                    });
                }
            })
            .catch(err => console.log(err));
        }
    }, [product.id_product_type]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit({ ...product, ...taxes });
        setProduct({});
        setTaxes({
            pis: 0,
            confins: 0,
            icms: 0,
            ipi: 0
        });
    };

    function handleChange(e) {
        setTaxes({ ...taxes, [e.target.name]: e.target.value });
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
                required
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
                value={taxes.pis}
                min="0"
                max="100"
                step="0.01"
            />
            <Input
                type="number"
                text="CONFINS"
                name="confins"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={taxes.confins}
                min="0"
                max="100"
                step="0.01"
            />
            <Input
                type="number"
                text="ICMS"
                name="icms"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={taxes.icms}
                min="0"
                max="100"
                step="0.01"
            />
            <Input
                type="number"
                text="IPI"
                name="ipi"
                placeholder="Insira o valor percentual"
                required
                handleOnChange={handleChange}
                value={taxes.ipi}
                min="0"   
                max="100"
                step="0.01"
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default Taxform;
