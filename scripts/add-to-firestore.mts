import {
    intro,
    outro,
    select,
    note,
    text,
    spinner,
    isCancel,
    cancel
} from '@clack/prompts';
import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

type FireStoreDocument = { [key: string]: string };

// Helpers
const f1 = [
    { field: 'team_name', question: 'Team Name?' },
    { field: 'car', question: 'Car?' },
    { field: 'drivers', question: 'Drivers? (Comma-separated)' },
    { field: 'electric_motor', question: 'Electric Motor?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' }
];

const hypercar = [
    { field: 'team_name', question: 'Team Name?' },
    { field: 'car', question: 'Car?' },
    { field: 'electric_motor', question: 'Electric Motor Name?' },
    { field: 'electric_horsepower', question: 'Electric Motor Horsepower?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' },
    { field: 'chassis', question: 'Chassis?' }
];

const gt3 = [
    { field: 'brand', question: 'Brand Name?' },
    { field: 'model', question: 'Model?' },
    { field: 'electric_motor', question: 'Electric Motor?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_torque', question: 'Engine Torque?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' }
];

const formulae = [
    { field: 'battery_energy', question: 'Battery Energy?' },
    { field: 'battery_supplier', question: 'Battery Supplier?' },
    { field: 'drivers', question: 'Drivers? (Comma-separated)' },
    { field: 'electric_power', question: 'Electric Power?' },
    { field: 'image', question: 'Image URL?' },
    { field: 'powertrain', question: 'Powertrain?' },
    { field: 'regeneration_power', question: 'Regeneration Power?' },
    { field: 'team_name_primary', question: 'Primary Team Name?' },
    { field: 'team_name_secondary', question: 'Secondary Team Name?' }
];

const pushToFirebase = async (
    collectionId: string,
    document: FireStoreDocument,
    documentId: string
) => {
    const firebaseConfig = {
        apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
        appId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    await setDoc(doc(db, collectionId, documentId.toLowerCase()), document);
};

// The CLI starts from here.

intro('Welcome to Motorsports FireStore CLI. 🚀');
note('Only a moderater can create it using the key.');

const type = await select({
    message: 'Pick a series?',
    options: [
        { value: 'f1', label: 'F1 Cars' },
        { value: 'hypercar', label: 'Hypercars' },
        { value: 'gt3', label: 'GT3 Cars' },
        { value: 'formulae', label: 'Formula E Cars' }
    ]
});

const document: FireStoreDocument = {};

if (type === 'f1') {
    for (let i = 0; i < f1.length; i++) {
        const askedField = await text({
            message: f1[i].question
        });

        document[f1[i].field] = askedField.toString();
        if (isCancel(askedField)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }
    }
    const spin = spinner();
    spin.start('Starting the firestore push...');

    pushToFirebase(
        'f1',
        document,
        `${document['team_name']}-${document['car']}`
    ).then((completedId) => {
        spin.stop(`Firestore push completed with id: ${completedId}`);
        outro('Thank you!');
        process.exit(0);
    });
}

if (type === 'hypercar') {
    const category = await select({
        message: 'Pick a category?',
        options: [
            { value: 'lmh', label: 'Le Mans Hypercar' },
            { value: 'lmdh', label: 'Le Mans Daytona Hypercar' }
        ]
    });
    document['category'] = String(category);

    for (let i = 0; i < hypercar.length; i++) {
        const askedField = await text({
            message: hypercar[i].question
        });

        document[hypercar[i].field] = askedField.toString();
        if (isCancel(askedField)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }
    }
    const spin = spinner();
    spin.start('Starting the firestore push...');

    pushToFirebase(
        'hypercar',
        document,
        `${document['team_name']}-${document['car'].replaceAll(' ', '-')}`
    ).then(() => {
        spin.stop(`Firestore push completed!`);
        outro('Thank you!');
        process.exit(0);
    });
}

if (type === 'gt3') {
    for (let i = 0; i < gt3.length; i++) {
        const askedField = await text({
            message: gt3[i].question
        });

        document[gt3[i].field] = askedField.toString();
        if (isCancel(askedField)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }
    }
    const spin = spinner();
    spin.start('Starting the firestore push...');

    pushToFirebase(
        'gt3',
        document,
        `${document['brand'].replaceAll(' ', '-')}-${document[
            'model'
        ].replaceAll(' ', '-')}`
    ).then(() => {
        spin.stop(`Firestore push completed!`);
        outro('Thank you!');
        process.exit(0);
    });
}

if (type === 'formulae') {
    for (let i = 0; i < formulae.length; i++) {
        const askedField = await text({
            message: formulae[i].question
        });

        document[formulae[i].field] = askedField.toString();
        if (isCancel(askedField)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }
    }

    const spin = spinner();
    spin.start('Starting the firestore push...');

    pushToFirebase(
        'formulae',
        document,
        `${document['teamNamePrimary'].replaceAll(' ', '-')}-${document[
            'teamNameSecondary'
        ].replaceAll(' ', '-')}`
    ).then(() => {
        spin.stop(`Firestore push completed!`);
        outro('Thank you!');
        process.exit(0);
    });
}
