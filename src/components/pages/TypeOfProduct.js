import Message from "../layout/Message"
import styles from "./TypeOfProduct.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProdutCard from "../project/ProductCard" 
import { useState, useEffect } from "react"

// import TypeOfProductForm from "../project/TypeOfProductForm"

function TypeOfProduct() {
    const [products, setProdutcs] = useState([])





    useEffect(() => {
        fetch('http://localhost:8080/api/products', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => resp.json()) 
            .then((data) => {
                setProdutcs(data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className={styles.product_container}>
            <div className={styles.title_container}>
                <h1>Produtos</h1>
                <LinkButton to="/Products" text="Cadastrar Produto"> </LinkButton>
            </div>

            {/* <Message msg="Alguma mensagem" /> */}
            <Container customClass="start">
                {/* <TypeOfProductForm handleSubmit={''} btnText="Cadastrar Tipo do Produto" /> */}
                {products.length > 0 && 
                    products.map((product) =>(
                        <ProdutCard 
                            id={product.id}
                            name={product.name} 
                            type={product.type ?? 'Não cadastrado'} 
                            price={product.price}
                            key={product.id}
                        />
                    ))
                }
            </Container>
        </div>
    )
}

export default TypeOfProduct