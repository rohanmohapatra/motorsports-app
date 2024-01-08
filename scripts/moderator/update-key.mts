import { select, spinner, text } from '@clack/prompts';
import {
    getAvailableKeys,
    getDataFromKey,
    pushToFirebase
} from './firestore-utils.mjs';
import { SeriesType } from './helpers.mjs';

export const updateKey = async (type: SeriesType) => {
    const documentIds = await getAvailableKeys(String(type));

    const key = await select({
        message: 'Which key to update?',
        options: documentIds.map((id) => ({ value: id, label: id }))
    });

    const document = await getDataFromKey(String(type), String(key));

    if (document) {
        const newKey = await text({
            message: 'What is the new key?',
            initialValue: String(key)
        });

        const spin = spinner();
        spin.start('Starting the firestore update...');

        await pushToFirebase(String(type), document, String(newKey));
        spin.stop(`Firestore update completed!`);

        // TODO: delete old key
    }
};
