import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './OrderReview.module.css';
import Container from '../layout/Container';
import SubmitOrderButton from '../layout/SubmitOrderButton';
import LinkButton from '../layout/LinkButton';

function OrderReview() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedProducts } = location.state || {};

    const [totalValues, setTotalValues] = useState({
        totalProductValue: 0,
        totalTax: 0,
        totalToPay: 0
    });

    useEffect(() => {
        if (Array.isArray(selectedProducts)) {
            const totals = selectedProducts.reduce((acc, product) => {
                const quantity = product.quantity;
                const totalProductValue = parseFloat(product.price) * quantity;
                const totalTax = product.product_type?.product_tax
                    ? parseFloat(product.product_type.product_tax.pis || 0) +
                      parseFloat(product.product_type.product_tax.confins || 0) +
                      parseFloat(product.product_type.product_tax.icms || 0) +
                      parseFloat(product.product_type.product_tax.ipi || 0)
                    : 0;

                acc.totalProductValue += totalProductValue;
                acc.totalTax += totalTax;
                acc.totalToPay += totalProductValue + totalTax;

                return acc;
            }, {
                totalProductValue: 0,
                totalTax: 0,
                totalToPay: 0
            });

            setTotalValues(totals);
        }
    }, [selectedProducts]);

    const handleSubmit = () => {
        fetch('http://localhost:8080/api/sale', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ products: selectedProducts })
        }).then((resp) => resp.json())
        .then((data) => {
            if (data.success) {
                navigate('/list-sale');
            } else {
                console.error('Erro ao finalizar o pedido:', data.message);
            }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Revisão do Pedido</h1>
                <div className={styles.btn_container}>
                    <LinkButton to="/list-sales" text="Registro de Vendas" />
                    <LinkButton to="/product" text="Produtos" />
                    <LinkButton to="/" text="Home" />
                </div>
            </div>
            <Container customClass="start">
                <p>Revise seu pedido antes de finalizar a compra</p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Valor do Produto</th>
                            <th>Imposto</th>
                            <th>Quantidade (Unidade)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(selectedProducts) && selectedProducts.map(product => {
                            const quantity = product.quantity;
                            const totalProductValue = parseFloat(product.price) * quantity;
                            const totalTax = product.product_type?.product_tax
                                ? parseFloat(product.product_type.product_tax.pis || 0) +
                                  parseFloat(product.product_type.product_tax.confins || 0) +
                                  parseFloat(product.product_type.product_tax.icms || 0) +
                                  parseFloat(product.product_type.product_tax.ipi || 0)
                                : 0;
                            return (
                                <tr key={product.id}>
                                    <td>R$ {totalProductValue.toFixed(2)}</td>
                                    <td>R$ {totalTax.toFixed(2)}</td>
                                    <td>{quantity}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table className={styles.summaryTable}>
                    <tfoot>
                        <tr>
                            <td>Valor Total dos Produtos:</td>
                            <td>R$ {totalValues.totalProductValue.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Imposto Total:</td>
                            <td>R$ {totalValues.totalTax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total a Pagar:</td>
                            <td>R$ {totalValues.totalToPay.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </Container>
            <div className={styles.btn_container}>
                    <LinkButton to="/register-sale" text="Cancelar" />
                    <SubmitOrderButton text='Finalizar Pedido' onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default OrderReview;
