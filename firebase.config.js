// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "portfolio-96dd5.firebaseapp.com",
    databaseURL: "https://portfolio-96dd5-default-rtdb.firebaseio.com",
    projectId: "portfolio-96dd5",
    storageBucket: "portfolio-96dd5.appspot.com",
    messagingSenderId: "284798345694",
    appId: "1:284798345694:web:8f01a56c59a6ea8bf9fd4f",
    measurementId: "G-4KBYZKBM50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
