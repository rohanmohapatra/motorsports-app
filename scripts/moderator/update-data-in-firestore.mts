import { select, text, isCancel, cancel, spinner } from '@clack/prompts';
import {
    getAvailableKeys,
    getDataFromKey,
    updateInFirebase
} from './firestore-utils.mjs';
import { SeriesType } from './helpers.mjs';

export const updateData = async (type: SeriesType) => {
    const documentIds = await getAvailableKeys(String(type));

    const key = await select({
        message: 'Which key to update?',
        options: documentIds.map((id) => ({ value: id, label: id }))
    });

    const document = await getDataFromKey(String(type), String(key));
    if (!document) {
        process.exit(0);
    }
    const documentFields = Object.keys(document ?? {});
    let fieldToUpdate = undefined;
    while (fieldToUpdate !== 'save') {
        const options = documentFields.map((id) => ({ value: id, label: id }));
        options.push({ value: 'save', label: 'Save now!' });
        fieldToUpdate = await select({
            message: 'Which field to update?',
            options
        });

        if (isCancel(fieldToUpdate)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }

        if (fieldToUpdate !== 'save') {
            const updatedValue = await text({
                message: `Enter new value for ${String(fieldToUpdate)}`,
                placeholder: document[String(fieldToUpdate)]
            });
            document[String(fieldToUpdate)] = updatedValue;
        }
    }
    const spin = spinner();
    spin.start('Starting the firestore update...');
    await updateInFirebase(String(type), document, String(key));
    spin.stop('Firestore push completed!');
};
