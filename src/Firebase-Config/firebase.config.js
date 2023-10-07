// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPn2e_QdS52_-D8Ka34S69KoGBGgGEkJI",
  authDomain: "b8a9-event-management-frs11.firebaseapp.com",
  projectId: "b8a9-event-management-frs11",
  storageBucket: "b8a9-event-management-frs11.appspot.com",
  messagingSenderId: "968122012623",
  appId: "1:968122012623:web:99fee130a475829e4df8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);