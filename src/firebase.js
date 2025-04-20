// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   appId: "YOUR_APP_ID",
// };
const firebaseConfig = {
    apiKey: "AIzaSyD2U_2A1pYOtehAa47RGFaAxYVRCvQTqA0",
    authDomain: "portfolio-773b3.firebaseapp.com",
    projectId: "portfolio-773b3",
    // storageBucket: "portfolio-773b3.firebasestorage.app",
    // messagingSenderId: "1016580919256",
    appId: "1:1016580919256:web:bde867e80c8ebba3da2cad",
    // measurementId: "G-PXWCNR06SV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
