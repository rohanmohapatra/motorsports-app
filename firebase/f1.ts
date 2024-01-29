import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { Base } from '.';

export class F1 extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'f1', id);
        return (await getDoc(docReference)).data();
    }

    async getAllDetails() {
        const documents = await getDocs(collection(this.getDatabase(), 'f1'));
        return documents.docs.map((document) => ({
            id: document.id,
            ...document.data()
        }));
    }
}
