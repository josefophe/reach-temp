import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvQgH4_WFVtSBZPhb5tueRxb9Uu1EVwSk",
  authDomain: "nft-royal.firebaseapp.com",
  projectId: "nft-royal",
  storageBucket: "nft-royal.appspot.com",
  messagingSenderId: "1093498887694",
  appId: "1:1093498887694:web:e232ddfe35fcda2391e65f"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
