//import firebase from 'firebase'; //hame named export haro miare va mirize to  *
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAfotcA8UXSjx_qQowTbjzM-Ly60U3uAgQ",
    authDomain: "expensify-4e51b.firebaseapp.com",
    databaseURL: "https://expensify-4e51b.firebaseio.com",
    projectId: "expensify-4e51b",
    storageBucket: "expensify-4e51b.appspot.com",
    messagingSenderId: "243855513885"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };