// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzlRCageDD-G86rhoG76ecjZJz8UITvkE",
    authDomain: "tiendafuegoytierra.firebaseapp.com",
    projectId: "tiendafuegoytierra",
    storageBucket: "tiendafuegoytierra.appspot.com",
    messagingSenderId: "372546923936",
    appId: "1:372546923936:web:bb38dbb94c859456e1c8c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storageDB = getStorage(app)
export const auth = getAuth(app);
