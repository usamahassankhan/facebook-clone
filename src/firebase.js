import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDjsInBXrUkgaBhC-mInZklBVsgBLUJl1I",
    authDomain: "facebook-clone-b8cf0.firebaseapp.com",
    databaseURL: "https://facebook-clone-b8cf0.firebaseio.com",
    projectId: "facebook-clone-b8cf0",
    storageBucket: "facebook-clone-b8cf0.appspot.com",
    messagingSenderId: "443949400486",
    appId: "1:443949400486:web:fe4f73016026c63b2b8f67",
    measurementId: "G-B0BZJ6P9HS"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;
