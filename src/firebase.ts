// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxgxS97gUwDTi3C4zJnzOWrWTv132Vt7c",
  authDomain: "sellercentral-ungater.firebaseapp.com",
  projectId: "sellercentral-ungater",
  storageBucket: "sellercentral-ungater.appspot.com",
  messagingSenderId: "765815953353",
  appId: "1:765815953353:web:b8dfa5577d610db375fa18",
  measurementId: "G-74LXYC1N4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export const initFirebase = () => {
  return app;
};
