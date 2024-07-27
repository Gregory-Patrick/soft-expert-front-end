import React from 'react';
import styles from './SubmitLinkButton.module.css';

function SubmitLinkButton({ onClick, text }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            {text}
        </button>
    );
}

export default SubmitLinkButton;