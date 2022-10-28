import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA79L5m4ezvPGFIO9HwFopizajzVK30Pm4",
  authDomain: "netflix-clone-25739.firebaseapp.com",
  projectId: "netflix-clone-25739",
  storageBucket: "netflix-clone-25739.appspot.com",
  messagingSenderId: "739126532656",
  appId: "1:739126532656:web:05ec390d5863322f54abf5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };