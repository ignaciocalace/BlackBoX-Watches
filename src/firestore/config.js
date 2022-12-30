import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJIk_0lezxIeF75qe5Jspd3CT9a0us3MM",
  authDomain: "blackbox-95fa6.firebaseapp.com",
  projectId: "blackbox-95fa6",
  storageBucket: "blackbox-95fa6.appspot.com",
  messagingSenderId: "370874409460",
  appId: "1:370874409460:web:b863b09c5ee7425d55d9a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
  return app;
};
