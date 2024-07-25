import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

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
                <span>Tipo:</span> {type ?? 'Não cadastrado'}
            </p>
            <p className={styles.type_text}>
                <span>Imposto total:</span> {total_tax ?? 'Não cadastrado'}
            </p>

            <div className={styles.product_card_action}> 
                <Link to={`/type/${id}`}>
                    Tipo
                </Link>
                <Link to="/tax/">
                    Imposto
                </Link>
                <Link to={`/edit/${id}`}>
                    Produto
                </Link>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ProdutCard