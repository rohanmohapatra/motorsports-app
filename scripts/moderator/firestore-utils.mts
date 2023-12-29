import { initializeApp } from 'firebase/app';
import {
    collection,
    doc,
    getDocs,
    getFirestore,
    setDoc,
    getDoc,
    updateDoc
} from 'firebase/firestore';
import dotenv from 'dotenv';

export type FireStoreDocument = { [key: string]: string };
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
    appId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID
};

export const pushToFirebase = async (
    collectionId: string,
    document: FireStoreDocument,
    documentId: string
) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    await setDoc(doc(db, collectionId, documentId.toLowerCase()), document);
};

export const updateInFirebase = async (
    collectionId: string,
    document: FireStoreDocument,
    documentId: string
) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    try {
        await updateDoc(
            doc(db, collectionId, documentId.toLowerCase()),
            document
        );
    } catch (error) {
        console.error(error);
    }
};

export const getAvailableKeys = async (collectionId: string) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const documents = await getDocs(collection(db, collectionId));
    return documents.docs.map((doc) => doc.id);
};

export const getDataFromKey = async (
    collectionId: string,
    documentId: string
) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const document = await getDoc(doc(db, collectionId, documentId));
    return document.data();
};
