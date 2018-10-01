//import firebase from 'firebase'; //hame named export haro miare va mirize to  *
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

console.log(process.env.FIREBASE_API_KEY);
const config = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    apiKey: 'AIzaSyAfotcA8UXSjx_qQowTbjzM-Ly60U3uAgQ',
    authDomain: 'expensify-4e51b.firebaseapp.com',
    databaseURL: 'https://expensify-4e51b.firebaseio.com',
    projectId: 'expensify-4e51b',
    storageBucket: 'expensify-4e51b.appspot.com',
    messagingSenderId: '243855513885'
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };