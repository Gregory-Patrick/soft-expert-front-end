import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProdutCard({ id, name, type, price, total_tax, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.product_card}>
            <h4>{name}</h4>
            <p>
                <span>Preço:</span> R${price}
            </p>
            <p className={styles.type_text}>
                <span>Tipo:</span> {type ?? 'Não vinculado'}
            </p>
            <p className={styles.type_text}>
                <span>Imposto total:</span> {total_tax ?? 'Não vinculado'}
            </p>

            <div className={styles.product_card_action}> 
                <Link to={`/type-bind/${id}`}>
                    Vincular Tipo
                </Link>
                <Link to={`/edit-product/${id}`}>
                    Editar
                </Link>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ProdutCard