// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGGTE6sVCDbefKpoOcPkgRjVmFW3Ld8o",
  authDomain: "helados-ecomm.firebaseapp.com",
  projectId: "helados-ecomm",
  storageBucket: "helados-ecomm.appspot.com",
  messagingSenderId: "707672909091",
  appId: "1:707672909091:web:aa6eba07e71d63166f9896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);