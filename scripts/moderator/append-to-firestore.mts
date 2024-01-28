import { cancel, isCancel, select, spinner, text } from '@clack/prompts';
import { SeriesType, f1, formula_e, gt3, hypercar } from './helpers.mjs';
import {
    getAvailableKeys,
    getDataFromKey,
    updateInFirebase
} from './firestore-utils.mjs';

const typeSelection: { [key: string]: any } = {
    f1: f1,
    gt3: gt3,
    hypercar: hypercar,
    formulae: formula_e
};

export const appendToFirestore = async (type: SeriesType) => {
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
    const fieldsToUpdate = typeSelection[String(type)].filter(
        (field: { field: string }) => !documentFields.includes(field.field)
    );

    for (let i = 0; i < fieldsToUpdate.length; i++) {
        const askedField = await text({
            message: fieldsToUpdate[i].question
        });

        document[fieldsToUpdate[i].field] = askedField.toString();
        if (isCancel(askedField)) {
            cancel('Operation cancelled.');
            process.exit(0);
        }
    }
    const spin = spinner();
    spin.start('Starting the firestore update...');
    await updateInFirebase(String(type), document, String(key));
    spin.stop('Firestore push completed!');
};
