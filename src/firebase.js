// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import { getDatabase } from "firebase/database";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import {getStorage} from "firebase/storage";
// import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDKaUvu1oQHn22Mzlr1u_MCa-jVosCBN-k",
  authDomain: "react-contact-cb7f3.firebaseapp.com",
  projectId: "react-contact-cb7f3",
  storageBucket: "react-contact-cb7f3.appspot.com",
  messagingSenderId: "373232454722",
  appId: "1:373232454722:web:b794c29aa143999a9371db"
};

const fireDb=firebase.initializeApp(firebaseConfig);
export const storage=getStorage(fireDb);
export default fireDb.database().ref();
