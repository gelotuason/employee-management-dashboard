import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCthpxGRmyIsTXXb0cRIKSBo-ltiupE1h4",
    authDomain: "employemanagement-8f010.firebaseapp.com",
    projectId: "employemanagement-8f010",
    storageBucket: "employemanagement-8f010.appspot.com",
    messagingSenderId: "720884369767",
    appId: "1:720884369767:web:f38b512528d1b6e4d207c2",
    measurementId: "G-WHN0FSE50G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;