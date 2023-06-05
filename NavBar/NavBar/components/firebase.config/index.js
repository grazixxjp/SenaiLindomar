import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth'
import {getFirestore, query, getDocs, 
  collection, where, addDoc} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBWCPmB0D7Q3CmrzdtOKtp1O09ltJIwmug",
  authDomain: "crud-reactn-2023.firebaseapp.com",
  projectId: "crud-reactn-2023",
  storageBucket: "crud-reactn-2023.appspot.com",
  messagingSenderId: "321245748635",
  appId: "1:321245748635:web:536023f8cbee53e919953e",
  measurementId: "G-7CRQB9T06J"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const logout = ()=>{signOut(auth)}

export {
  auth,
  db,
  storage,
  logout
}