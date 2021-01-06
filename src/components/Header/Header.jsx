import React from 'react'
// Importing CSS
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.root}>
            <span className={styles.span}>Project Management System</span>
            <hr/>
        </div>
    )
}
