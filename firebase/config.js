import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcRoSVNJTxNW7YF8ZH81luchq-XXPSN_o",
    authDomain: "ashfaq-interview-1.firebaseapp.com",
    databaseURL: "https://ashfaq-interview-1.firebaseio.com",
    projectId: "ashfaq-interview-1",
    storageBucket: "ashfaq-interview-1.appspot.com",
    messagingSenderId: "552013114341"
};
firebase.initializeApp(config);
console.log('>>>>>>>>>>>>', config);

const database = firebase.database(); //Gets the Database service for the default app or a given app.
const ref = firebase.database().ref(); // reference to the root location of the database.
const firebaseAuth = firebase.auth(); // Gets the Auth service for the app.
const storageRef = firebase.storage().ref(); // Points to the root storage reference

export {
    database,
    ref,
    firebaseAuth,
    storageRef
};