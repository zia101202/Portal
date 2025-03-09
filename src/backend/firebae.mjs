// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJQozd5pkl6PT3DuzhkxxgfqnUjsuhvcQ",
  authDomain: "portalumt-30876.firebaseapp.com",
  projectId: "portalumt-30876",
  storageBucket: "portalumt-30876.appspot.com",
  messagingSenderId: "937945218425",
  appId: "1:937945218425:web:0dd6b56cd91af098cbc3a8",
  measurementId: "G-CX8Y027JK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




export default db;