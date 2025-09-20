// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvWRMmr-d5Qvev6yWt5uXgZ32DN-Po3Nc",
  authDomain: "copreneur-2dd93.firebaseapp.com",
  projectId: "copreneur-2dd93",
  storageBucket: "copreneur-2dd93.firebasestorage.app",
  messagingSenderId: "1005299533213",
  appId: "1:1005299533213:web:bf705af340e6c6cacddb74"
};

// Initialize Firebase
const app = getApps.length == 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db =getFirestore(app);

export { auth, db };

