import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCtPK0w3lqv_TyVzfB5HyP6uy2sXn5XCK4",
    authDomain: "vue-walkie-8d2cd.firebaseapp.com",
    projectId: "vue-walkie-8d2cd",
    storageBucket: "vue-walkie-8d2cd.appspot.com",
    messagingSenderId: "195319538330",
    appId: "1:195319538330:web:028cba8d1de902303ff523",
    measurementId: "G-P96GC6E6PD"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();