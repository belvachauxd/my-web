import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpP2OJ6njkpFOZMuJuceBcj7wQEMM4T9g",
  authDomain: "cs-project-58faa.firebaseapp.com",
  databaseURL: "https://cs-project-58faa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cs-project-58faa",
  storageBucket: "cs-project-58faa.appspot.com",
  messagingSenderId: "469016762067",
  appId: "1:469016762067:web:c28d3f3017a9c580b2a626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();