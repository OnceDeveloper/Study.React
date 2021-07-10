import React, { useEffect, useState } from 'react';
import LoginFooter from './loginFooter';
import LoginHeader from './loginHeader';
import styles from './login.module.css';
import * as fire from '../../utils/firebase/firebase';
import firebase from 'firebase';
const Login = (props) => {
    // const onLoginGoogleApi = () => {
    //     fire.signInWithGoogle
    // }
    const [curUser, setCurUser] = useState();
    useEffect(() => {
        // fire.auth.onAuthStateChanged(user => {
        //     setCurUser(user)
        // });
        // console.log(curUser);
        //firebase.auth().signInWithRedirect(fire.provider);
    }, []);
    const googleLogin = () => {
        // debugger
        // const provider = fire.googleProvider();
        // firebase.auth().signInWithRedirect(provider);
        // firebase.auth().getRedirectResult();
    }

    return (
        <div className={styles.loginContainer}>
            <LoginHeader />
            <div className={styles.loginArea}>
                <div className={styles.loginTitle}> Login </div>
                <button className={styles.loginButton} onClick={googleLogin} >
                    {/* onClick={fire.signInWithGoogle} */}
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