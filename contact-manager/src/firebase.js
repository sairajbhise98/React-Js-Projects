import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVMXBgv99DHfk4ykkiPWD9JCpO8oLPV6I",
    authDomain: "react-crud-dd794.firebaseapp.com",
    databaseURL: "https://react-crud-dd794-default-rtdb.firebaseio.com",
    projectId: "react-crud-dd794",
    storageBucket: "react-crud-dd794.appspot.com",
    messagingSenderId: "883833015633",
    appId: "1:883833015633:web:e760286357d9ec655d1770"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();