import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB29cJmE-ZhXPSO7BwIGda5Ihaie0nf6Y8",
  authDomain: "team-proo.firebaseapp.com",
  projectId: "team-proo",
  storageBucket: "team-proo.appspot.com",
  messagingSenderId: "806741069013",
  appId: "1:806741069013:web:d3f56324cf2fb2c134e65c",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore, auth
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// enable timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
