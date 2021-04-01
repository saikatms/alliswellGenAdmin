import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhMUWKEaU1IUb7_YL9cAYqc1zTH5LMxBA",
  authDomain: "alliswell-bf686.firebaseapp.com",
  projectId: "alliswell-bf686",
  databaseURL: "https://alliswell-bf686-default-rtdb.firebaseio.com",
  storageBucket: "alliswell-bf686.appspot.com",
  messagingSenderId: "87465855106",
  appId: "1:87465855106:web:176b62c113e41eeaee0c9b",
  measurementId: "G-Z14XS67PLV",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
