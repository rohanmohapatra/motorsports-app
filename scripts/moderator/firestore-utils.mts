import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
import * as admin from 'firebase-admin';

export type FireStoreDocument = { [key: string]: any };
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const init = () => (!getApps().length ? initializeApp() : getApp());

export const pushToFirebase = async (
    collectionId: string,
    document: FireStoreDocument,
    documentId: string
) => {
    const app = init();
    const db = getFirestore(app);
    await db.doc(`${collectionId}/${documentId.toLowerCase()}`).set(document);
};

export const updateInFirebase = async (
    collectionId: string,
    document: FireStoreDocument,
    documentId: string
) => {
    const app = init();
    const db = getFirestore(app);
    try {
        await db
            .doc(`${collectionId}/${documentId.toLowerCase()}`)
            .update(document);
    } catch (error) {
        console.error(error);
    }
};

export const getAvailableKeys = async (collectionId: string) => {
    const app = init();
    const db = getFirestore(app);
    const documents = await db.collection(collectionId).get();
    return documents.docs.map((doc) => doc.id);
};

export const getDataFromKey = async (
    collectionId: string,
    documentId: string
) => {
    const app = init();
    const db = getFirestore(app);
    const document = await db.doc(`${collectionId}/${documentId}`).get();
    return document.data();
};
