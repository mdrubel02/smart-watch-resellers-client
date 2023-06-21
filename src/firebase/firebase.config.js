
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
export default app;



// REACT_APP_API_KEY=AIzaSyCAi5bbNo0lC74PYvmyKGSUqxaH1BLe22U
//  REACT_APP_AUTH_DOMAIN=organic-food-d154a.firebaseapp.com
//  REACT_APP_PROJECT_ID=organic-food-d154a
//  REACT_APP_STORAGE_BUCKET=organic-food-d154a.appspot.com
//  REACT_APP_MESSAGING_SENDER_ID=280638790143
//  REACT_APP_APP_ID=1:1:280638790143:web:1ecd9506563afa635f6fca


//mdrubelgmail.com
// REACT_APP_API_KEY=AIzaSyA6cOpLmuhPDNgIshJCcMxKjye_7bJs4BA
// REACT_APP_AUTH_DOMAIN=aorganic-food-45d5a.firebaseapp.com
// REACT_APP_PROJECT_ID=organic-food-45d5a
// REACT_APP_STORAGE_BUCKET=organic-food-45d5a.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=444401624056
// REACT_APP_APP_ID=1:444401624056:web:86d16f1efb7da8428d6c0d