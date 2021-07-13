import React from 'react';
import styles from './login.module.css';

const LoginHeader = (props) => {
    return (
        <div className={styles.headerBox}>
            <img src={require('../../images/logo.ico').default} />
            <div className={styles.headerTitle}>Business Card Maker</div>
        </div>
    );
};

export default LoginHeader;