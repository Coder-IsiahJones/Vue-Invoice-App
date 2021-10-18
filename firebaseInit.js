import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxpl-GPNXBWD4a9C5AQpgmTmJsfyX36WQ",
  authDomain: "invoice-app-vue-fe5ce.firebaseapp.com",
  projectId: "invoice-app-vue-fe5ce",
  storageBucket: "invoice-app-vue-fe5ce.appspot.com",
  messagingSenderId: "649986851016",
  appId: "1:649986851016:web:0d99710e8f0ee45220a5fd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
