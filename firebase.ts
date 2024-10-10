import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMmoGUDpMaYTXgXoDSwUUZ_pGbM4KOA8A",
  authDomain: "paper-pal-f4b7e.firebaseapp.com",
  projectId: "paper-pal-f4b7e",
  storageBucket: "paper-pal-f4b7e.appspot.com",
  messagingSenderId: "16270695990",
  appId: "1:16270695990:web:db0d4e2ec38ffc6418c297",
  measurementId: "G-LPJGMBYKGS"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
