import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqkcHVAdgXl9wKRuHK20OHynaA0W95_L8",
    authDomain: "restaurante-431b2.firebaseapp.com",
    projectId: "restaurante-431b2",
    storageBucket: "restaurante-431b2.appspot.com",
    messagingSenderId: "903641415333",
    appId: "1:903641415333:web:fe83746fcd86c50e64174c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth, db, storage };