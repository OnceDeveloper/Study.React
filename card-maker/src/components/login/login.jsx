import React, { useEffect, useState } from 'react';
import LoginFooter from './loginFooter';
import LoginHeader from './loginHeader';
import styles from './login.module.css';
import * as fireGoogle from '../../utils/firebase/googleSignIn';
import * as fireGithub from '../../utils/firebase/githubSignin';
import firebase from 'firebase';
import * as fire from '../../utils/firebase/firebase';

import { useHistory } from 'react-router-dom';

const Login = () => {
    const [curUser, setCurUser] = useState();
    const [curUserEmail, setCurUserEmail] = useState();
    const [curUserName, setCuerUserName] = useState();
    const history = useHistory();

    const googleLogin = () => {
        debugger;
        const provider = fireGoogle.googleProvider();
        fireGoogle.googleSignInPopup(provider);
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser !== null) {
                setCurUserEmail(firebaseUser.email);
                setCuerUserName(firebaseUser.displayName);
                setCurUser(firebaseUser);
                history.push('/cardList');
            } else {
                alert("google login Fail!!");
            }
        });
    }
    const githubLogin = () => {
        const provider = fireGithub.githubProvider();
        fireGithub.githubSignInPopup(provider);

    }

    return (
        <div className={styles.loginContainer}>
            <LoginHeader />
            <div className={styles.loginArea}>
                <div className={styles.loginTitle}> Login </div>
                <button className={styles.loginButton} onClick={googleLogin} >
                    Google
                </button>
                <button onClick={() => {
                    firebase.auth().signOut().then(() => {
                        alert("logOut");
                        setCurUserEmail('');
                    }).catch((error) => {
                        alert(error);
                    });
                }}>
                    logout
                </button>
                <button className={styles.loginButton} onClick={githubLogin} >
                    GitHub
                </button>
            </div>
            <LoginFooter />
        </div >
    );
};

export default Login;