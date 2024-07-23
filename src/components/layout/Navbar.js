import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Mercadinho Ester Egg" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/Products">Produtos</Link></li>
                    <li className={styles.item}><Link to="/TypeOfProduct">Tipos de Produtos</Link></li>
                    <li className={styles.item}><Link to="/ProductTypeTax">Imposto Sobre Tipo de Produto</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar