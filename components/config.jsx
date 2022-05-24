// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYzdHMiKvuHFSnsMB_YcLYe18PSV44AKQ",
    authDomain: "fir-crud-81a3c.firebaseapp.com",
    projectId: "fir-crud-81a3c",
    storageBucket: "fir-crud-81a3c.appspot.com",
    messagingSenderId: "68781486090",
    appId: "1:68781486090:web:594a878c7b5574c3dceff3",
    measurementId: "G-XREYG9GVZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)


export const db = getDatabase(app);