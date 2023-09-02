// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRlzriLvrlnOteb2Ga6Qw_Bx9F04WkS5k",
  authDomain: "chatapp-75c2b.firebaseapp.com",
  projectId: "chatapp-75c2b",
  storageBucket: "chatapp-75c2b.appspot.com",
  messagingSenderId: "685571158621",
  appId: "1:685571158621:web:d238f1f1b1e304877fd3b4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
