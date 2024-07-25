// import styles from './Type.module.css';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Loading from '../layout/Loading';
// import Container from '../layout/Container';

// function Type() {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [showProductForm, setShowProductForm] = useState(false)

//     useEffect(() => {
//         setTimeout(() => {
//             fetch(`http://localhost:8080/api/products/${id}`, {
//                 method: 'GET', 
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }, 
//             })
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setProduct(data);
//             })
//             .catch((err) => console.log(err));
//         }, 500);
//     }, [id])

//     function toggleProjectForm() {
//         setShowProductForm(!showProductForm)
//     }

//     return (
//         <>
//             {product ? ( 
//                 <div>
//                     <Container customClass="column">
//                         <div>
//                             <h1>Produto: {product.name}</h1>
//                             <button onClick={toggleProjectForm}>
//                                 {!setShowProductForm ? 'Editar Produto : Fechar'}
//                             </button>
//                         </div>
//                     </Container>
//                 </div>
//             ) : (
//                 <Loading />
//             )}
//         </>
//     );
// }

// export default Type;