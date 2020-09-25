import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDTLGLv-wTvfcH37srTTt7fenMUHtPJG-w",
    authDomain: "reddit-twin.firebaseapp.com",
    databaseURL: "https://reddit-twin.firebaseio.com",
    projectId: "reddit-twin",
    storageBucket: "reddit-twin.appspot.com",
    messagingSenderId: "412557000992",
    appId: "1:412557000992:web:c3351b359885ce0a161745",
    measurementId: "G-3SPW8CDZQ9"
}

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;