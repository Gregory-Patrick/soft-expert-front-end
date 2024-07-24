import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProdutCard({ id, name, type, price, handleRemove }) {
    return (
        <div className={styles.product_card}>
            <h4>{name} #{id}</h4>
            <p>
                <span>Preço:</span> R${price}
            </p>
            <p className={styles.type_text}>
                <span>Tipo:</span> {type}
            </p>
            <div className={styles.product_card_action}>
                {type && type.trim() !== '' && (
                    <Link to="/">
                        Cadastrar Tipo
                    </Link>
                )}
                <Link to="/">
                    Editar
                </Link>
                <Link to="/">
                    Excluir
                </Link>
            </div>
        </div>
    )
}

export default ProdutCard