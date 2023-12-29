import { select, text, spinner, isCancel, cancel } from '@clack/prompts';

import { f1, hypercar, gt3, SeriesType } from './helpers.mjs';
import { FireStoreDocument, pushToFirebase } from './firestore-utils.mjs';

export const addToFirestore = async (type: SeriesType) => {
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

        await pushToFirebase(
            'f1',
            document,
            `${document['team_name']}-${document['car']}`
        );
        spin.stop(`Firestore push completed!`);
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

        await pushToFirebase(
            'hypercar',
            document,
            `${document['team_name']}-${document['car'].replaceAll(' ', '-')}`
        );
        spin.stop(`Firestore push completed!`);
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

        await pushToFirebase(
            'gt3',
            document,
            `${document['brand'].replaceAll(' ', '-')}-${document[
                'model'
            ].replaceAll(' ', '-')}`
        );
        spin.stop(`Firestore push completed!`);
    }
};
