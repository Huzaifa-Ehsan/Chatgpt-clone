import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKZ8Y_lwTUM5oXJgxagyin7-jhpy1db4Q",
  authDomain: "chatgpt-clone-a1e54.firebaseapp.com",
  projectId: "chatgpt-clone-a1e54",
  storageBucket: "chatgpt-clone-a1e54.appspot.com",
  messagingSenderId: "184470399547",
  appId: "1:184470399547:web:6b1e433752aa89878a8a1e",
};

// Initialize Firebase

/*It is ok simple react app because there will no several occurences would be occur
 const app = initializeApp(firebaseConfig); */

/*Next.js Approach >  getApps() it will tell us all the initialized apps */
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

/* This is modular v9 approach */
const db = getFirestore(app);

export { db };
