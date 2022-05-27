// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwhGSAGDd0RX8YNB1YMj0JaYXNE8QzX-8",
    authDomain: "hossain-manufacturing.firebaseapp.com",
    projectId: "hossain-manufacturing",
    storageBucket: "hossain-manufacturing.appspot.com",
    messagingSenderId: "705635540362",
    appId: "1:705635540362:web:f809d0a40f3e6005f4bc73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;