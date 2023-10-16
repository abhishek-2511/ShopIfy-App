// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdr4KplAJGM3oVhqYTdx1FT6AxUkzUzo",
  authDomain: "shopify-accc8.firebaseapp.com",
  projectId: "shopify-accc8",
  storageBucket: "shopify-accc8.appspot.com",
  messagingSenderId: "243490001016",
  appId: "1:243490001016:web:919a250c47e8571ea6dd8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
