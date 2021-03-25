// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyARXN-XWj9Omo4eGzaZaKoag3z_6U6ms7A",
    authDomain: "firstfire-8eea7.firebaseapp.com",
    projectId: "firstfire-8eea7",
    storageBucket: "firstfire-8eea7.appspot.com",
    messagingSenderId: "765409790580",
    appId: "1:765409790580:web:8b1e27ec6f34781c919f21",
    measurementId: "G-2JMCGDD3FD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;