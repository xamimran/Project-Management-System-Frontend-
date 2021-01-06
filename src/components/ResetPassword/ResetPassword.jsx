import React from 'react'
import { Header } from '../Header/Header'
// importing CSS
import styles from './ResetPassword.module.css';

export const ResetPassword = () => {
    return (
        <div className={styles.root}>
            <Header/>

            Inside Reset Password
        </div>
    )
}
