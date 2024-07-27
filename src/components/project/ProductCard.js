import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ id, name, productType, price, handleRemove }) {

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    const totalTax = productType.product_tax
        ? (
            parseFloat(productType.product_tax.pis) +
            parseFloat(productType.product_tax.confins) +
            parseFloat(productType.product_tax.icms) +
            parseFloat(productType.product_tax.ipi)
        ).toFixed(2)
        : 'Não vinculado';

    return (
        <div className={styles.product_card}>
            <h4>{name}</h4>
            <p>
                <span>Preço:</span> R${price}
            </p>
            <p className={styles.type_text}>
                <span>Tipo:</span> {productType ? productType.name : 'Não vinculado'}
            </p>
            <p className={styles.type_text}>
                <span>Imposto total:</span> {totalTax}
            </p>

            <div className={styles.product_card_action}>
                <Link to={`/edit-product/${id}`}>
                    Editar
                </Link>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
