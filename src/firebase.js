import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA36UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
    authDomain: "reactprojects-12bbe.firebaseapp.com",
    projectId: "reactprojects-12bbe",
    storageBucket: "reactprojects-12bbe.appspot.com",
    messagingSenderId: "742066518833",
    appId: "1:742066518833:web:82f5ca3dde6278579d4e10",
    measurementId: "G-GQYHJ25QXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;