import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFWlfOKdaYyKY5vJnTqzeMf0cK7lgqmkU",
  authDomain: "crud-completo-8e995.firebaseapp.com",
  projectId: "crud-completo-8e995",
  storageBucket: "crud-completo-8e995.appspot.com",
  messagingSenderId: "245497780848",
  appId: "1:245497780848:web:8259b71219d021e2b372b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  storage,
};