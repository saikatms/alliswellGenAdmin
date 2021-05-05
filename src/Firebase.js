import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARP5K2TOnXMybypPIl8VBfp9lgQNtExgc",
  authDomain: "all-is-well-pharmacy-3dd14.firebaseapp.com",
  projectId: "all-is-well-pharmacy-3dd14",
  databaseURL: "https://all-is-well-pharmacy-3dd14-default-rtdb.firebaseio.com",
  storageBucket: "all-is-well-pharmacy-3dd14.appspot.com",
  messagingSenderId: "722925813574",
  appId: "1:722925813574:web:8ac977091df6b221336f47",
  measurementId: "G-W936D7CZ1Q",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
