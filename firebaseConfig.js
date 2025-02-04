import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNaqwrp923qQafqBrpt056g8VqRUPOjjM",
  authDomain: "study-e81d8.firebaseapp.com",
  projectId: "study-e81d8",
  storageBucket: "study-e81d8.firebasestorage.app",
  messagingSenderId: "348753698373",
  appId: "1:348753698373:web:83f73c43f35c28e15e8d2c",
  measurementId: "G-Q6MG4KMH18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
