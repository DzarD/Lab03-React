import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "react-s2-lab03.firebaseapp.com",
  projectId: "react-s2-lab03",
  storageBucket: "react-s2-lab03.appspot.com",
  messagingSenderId: "415319378037",
  appId: "1:415319378037:web:d1f3398877b175b6fad03c",

  databaseURL: "https://react-s2-lab03-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export default app;
