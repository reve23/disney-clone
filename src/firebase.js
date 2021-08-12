import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCK_9YO-bNLra8_D_QOs_tXgYNTle88-lA",
    authDomain: "disneyplus-clone-a9fc8.firebaseapp.com",
    projectId: "disneyplus-clone-a9fc8",
    storageBucket: "disneyplus-clone-a9fc8.appspot.com",
    messagingSenderId: "605776051771",
    appId: "1:605776051771:web:eff23ee4d2f5eae07aa61e"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
