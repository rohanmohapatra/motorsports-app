// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
    appId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID
};

export class Base {
    app: FirebaseApp;
    constructor() {
        this.app = initializeApp(firebaseConfig);
    }

    getDatabase() {
        return getFirestore(this.app);
    }
    getDetails(id: string) {
        throw new Error(`Not implemented for ${id}`);
    }

    getAllDetails() {
        throw new Error(`Not implemented`);
    }
}
