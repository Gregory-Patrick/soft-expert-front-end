import styles from './Home.module.css'
import stock from '../../img/stock.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Mercadinho - Soft Expert</span></h1>
            <p>Comece a cadastrar e a vender os seus produtos.</p>
            <div className={styles.btn_container}>
                <LinkButton to="/Products" text="Cadastrar Produto"> </LinkButton>
                <LinkButton to="/TypeOfProduct" text="Cadastrar Tipo do Produto"> </LinkButton>
                <LinkButton to="/ProductTypeTax" text="Cadastrar de Imposto"> </LinkButton>
                <LinkButton to="" text="Registrar Vendas"> </LinkButton>
            </div>
            <img src={stock} alt="Stock" />
        </section>
    )
}
export default Home