import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCKk_4xuKrLQeN15B2AhcOHVZ0AtIA86SA",
    authDomain: "todo-app-11eb3.firebaseapp.com",
    projectId: "todo-app-11eb3",
    storageBucket: "todo-app-11eb3.appspot.com",
    messagingSenderId: "659648749190",
    appId: "1:659648749190:web:ab2d32105c413a8132fb07"
  };


  firebase.initializeApp(firebaseConfig);
  
  //const app = initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  export { db };