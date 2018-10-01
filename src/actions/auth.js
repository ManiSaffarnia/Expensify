import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
    return ({
        type: 'LOGIN',
        uid
    });
};

export const logout = () => {
    return ({
        type: 'LOGOUT'
    });
};

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

