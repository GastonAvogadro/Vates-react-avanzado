import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZQ3emKzAt6pYU-12Puv7lZBnI3IFSFWw",
  authDomain: "vates-react-avanzado.firebaseapp.com",
  projectId: "vates-react-avanzado",
  storageBucket: "vates-react-avanzado.appspot.com",
  messagingSenderId: "11759173542",
  appId: "1:11759173542:web:1a59a6c355ce989626d967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;
