import styles from './SubmitOrderButton.module.css';

function SubmitOrderButton({ text, onClick }) {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.btn} onClick={onClick}>{text}</button>
        </div>
    );
}

export default SubmitOrderButton;