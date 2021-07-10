import firebase from "firebase/app";
import "firebase/auth";

// Docs: https://source.corp.google.com/piper///depot/google3/third_party/devsite/firebase/en/docs/auth/web/google-signin.md

function googleProvider() {
    // [START auth_google_provider_create]
    let provider = new firebase.auth.GoogleAuthProvider();
    // [END auth_google_provider_create]

    // [START auth_google_provider_scopes]
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // [END auth_google_provider_scopes]

    // [START auth_google_provider_params]
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    // [END auth_google_provider_params]
}

function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    // [END auth_google_signin_popup]
}

function googleSignInRedirectResult() {
    // [START auth_google_signin_redirect_result]
    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                let token = credential.accessToken;
                // ...
            }
            // The signed-in user info.
            let user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    // [END auth_google_signin_redirect_result]
}

function googleBuildAndSignIn(id_token) {
    // [START auth_google_build_signin]
    // Build Firebase credential with the Google ID token.
    let credential = firebase.auth.GoogleAuthProvider.credential(id_token);

    // Sign in with credential from the Google user.
    firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
    });
    // [END auth_google_build_signin]
}

// [START auth_google_callback]
function onSignIn(googleUser) {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    let unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            let credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.getAuthResponse().id_token);

            // Sign in with credential from the Google user.
            // [START auth_google_signin_credential]
            firebase.auth().signInWithCredential(credential).catch((error) => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;
                // ...
            });
            // [END auth_google_signin_credential]
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}
// [END auth_google_callback]

// [START auth_google_checksameuser]
function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        let providerData = firebaseUser.providerData;
        for (let i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}
