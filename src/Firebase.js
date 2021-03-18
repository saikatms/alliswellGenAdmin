import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAX50Nc-IEQ3C1nl584-QKGwQIOZkUTv0M",
  authDomain: "alliswell-99d18.firebaseapp.com",
  databaseURL: "https://alliswell-99d18-default-rtdb.firebaseio.com",
  projectId: "alliswell-99d18",
  storageBucket: "alliswell-99d18.appspot.com",
  messagingSenderId: "551951265424",
  appId: "1:551951265424:web:04d71e802c95067ab57215",
  measurementId: "G-2W12DJ4HYV",
};

firebase.initializeApp(config);

export default firebase;
