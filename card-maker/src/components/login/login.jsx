import React from 'react';
import LoginFooter from './loginFooter';
import LoginHeader from './loginHeader';
import styles from './login.module.css';

const Login = (props) => {
    return (
        <div className={styles.loginContainer}>
            <LoginHeader />
            <div className={styles.loginArea}>
                <div className={styles.loginTitle}> Login </div>
                <button className={styles.loginButton}>
                    Google
                </button>
                <button className={styles.loginButton}>
                    GitHub
                </button>
            </div>
            <LoginFooter />
        </div>
    );
};

export default Login;