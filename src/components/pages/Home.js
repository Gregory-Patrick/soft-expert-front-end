import styles from './Home.module.css'

import stock from '../../img/stock.png'
// import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Mercadinho - Soft Expert</span></h1>
            <p>Comece a cadastrar e a vender os seus produtos.</p>
            <LinkButton to="/Products" text="Cadastrar Produtos"> </LinkButton>
            <img src={stock} alt="Stock" />
        </section>
    )
}

export default Home