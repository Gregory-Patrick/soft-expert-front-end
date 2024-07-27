import styles from './Select.module.css'

import React from 'react';

function Select({ name, text, handleOnChange, value, options, required }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
                id={name} 
                name={name} 
                onChange={handleOnChange} 
                value={value}
                required={required}
            >
                <option value="" disabled>Selecione uma opção</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;