import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURSUTHDOMAIN",
  projectId: "PROJECTID",
  databaseURL: "DATABASEURL",
  storageBucket: "STORSGEBUCKET",
  messagingSenderId: "MESSAGESENDERID",
  appId: "APIID",
  measurementId: "MEASUREMENTID",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
