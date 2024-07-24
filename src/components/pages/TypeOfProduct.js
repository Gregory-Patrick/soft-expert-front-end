import Message from "../layout/Message"
import styles from "./TypeOfProduct.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"

function TypeOfProduct() {
    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Meus Produtos</h1>
                <LinkButton to="/Products" text="Cadastrar Produto"> </LinkButton>
            </div>

            <Message msg="Alguma mensagem" />
            <Container customClass="start">
                <p>projetos</p>
            </Container>

        </div>
    )
}

export default TypeOfProduct