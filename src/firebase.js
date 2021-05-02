import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxXhT7xHihyirfwza2InnDv8-G7on15a4",
  authDomain: "shopping-cart-pro.firebaseapp.com",
  projectId: "shopping-cart-pro",
  storageBucket: "shopping-cart-pro.appspot.com",
  messagingSenderId: "605132849504",
  appId: "1:605132849504:web:28e08376408721edb49e05",
  measurementId: "G-BGFD2MGZ4D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
