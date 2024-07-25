import loading from '../../img/loading.svg'
import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader_container} src={loading} alt="Loading" />
        </div>
    )
}

export default Loading