import styles from './Home.module.css'

import stock from '../../img/stock.png'
// import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Mercadinho - Soft Expert</span></h1>
            <p>Comece a cadastrar e a vender os seus produtos.</p>
            <div className={styles.btn_container}>
                <LinkButton to="/Products" text="Cadastrar Produto"> </LinkButton>
                <LinkButton to="/TypeOfProduct" text="Cadastro Tipo de Produto"> </LinkButton>
                <LinkButton to="/ProductTypeTax" text="Cadastro de Imposto"> </LinkButton>
                <LinkButton to="" text="Vendas"> </LinkButton>
            </div>
            <img src={stock} alt="Stock" />
        </section>
    )
}

export default Home