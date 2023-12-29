import { cancel, intro, note, outro, select } from '@clack/prompts';

import { addToFirestore } from './add-to-firestore.mjs';
import { SeriesType } from './helpers.mjs';
import { appendToFirestore } from './append-to-firestore.mjs';

// The CLI starts from here.

const main = async () => {
    intro('Welcome to Motorsports FireStore CLI. 🚀');
    note('Only a moderator can add/update/append it using the key.');

    const operation: symbol | 'add' | 'append' | 'update' = await select({
        message: 'Pick a series?',
        options: [
            { value: 'add', label: 'Add an entry' },
            { value: 'append', label: 'Append missing keys' },
            { value: 'update', label: 'Update an entry' }
        ]
    });

    const type: SeriesType = await select({
        message: 'Pick a series?',
        options: [
            { value: 'f1', label: 'F1 Cars' },
            { value: 'hypercar', label: 'Hypercars' },
            { value: 'gt3', label: 'GT3 Cars' }
        ]
    });

    switch (operation) {
        case 'add':
            await addToFirestore(type);
            break;

        case 'append':
            await appendToFirestore(type);
            break;

        default:
            throw new Error('Operation not supported 😔');
    }
};

main()
    .then(() => {
        outro('Thank you!');
        process.exit(0);
    })
    .catch((error) => cancel(error));
