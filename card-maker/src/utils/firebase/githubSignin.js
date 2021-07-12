import firebase from "firebase/app";
import "firebase/auth";

export function githubProvider() {
    let provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    provider.setCustomParameters({
        'allow_signup': 'false'
    });
    return provider;
}

function githubProviderCredential(token) {
    let credential = firebase.auth.GithubAuthProvider.credential(token);
}

export function githubSignInPopup(provider) {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;
            let token = credential.accessToken;
            let user = result.user;
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
}

function githubSignInRedirectResult() {
    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;
                let token = credential.accessToken;
            }
            let user = result.user;
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
}