import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmDqCgqwCjT2UV7mdGM_w2h_d5BGMSVyU",
    authDomain: "clone-17aee.firebaseapp.com",
    projectId: "clone-17aee",
    storageBucket: "clone-17aee.appspot.com",
    messagingSenderId: "818561620508",
    appId: "1:818561620508:web:7542dd8546cf16fcbf5dd9",
    measurementId: "G-Z0WLNGFSZC"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

