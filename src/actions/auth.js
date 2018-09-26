import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogOut = () => {
    return () => {
        firebase.auth().signOut();
    };
};