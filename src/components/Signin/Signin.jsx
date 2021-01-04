import React from 'react'
// Importing CSS
import styles from './Signin.module.css'; 

export const Signin = () => {
    return (
        <div className={styles.root}>
            <h1>Sign in</h1>
            <p>Don't have an account?<a>Sign up.</a></p>
            <form action="/home" method="POST">
                <input type="text" />
                <input type="password" />

                <button>SEND</button>
            </form>
        </div>
    )
}
