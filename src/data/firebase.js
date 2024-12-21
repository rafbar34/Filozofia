// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBu6mDCcE2fvI4JRE9kw9au5_XQ31F8xE",
    authDomain: "filozofia-4d7af.firebaseapp.com",
    projectId: "filozofia-4d7af",
    storageBucket: "filozofia-4d7af.firebasestorage.app",
    messagingSenderId: "219170994037",
    appId: "1:219170994037:web:b61ebea0c6d6f4c00fc53c",
    measurementId: "G-M4BP2C5XPF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
