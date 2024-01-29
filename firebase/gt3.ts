import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { Base } from '.';

export class GT3 extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'gt3', id);
        return (await getDoc(docReference)).data();
    }

    async getAllDetails() {
        const documents = await getDocs(collection(this.getDatabase(), 'gt3'));
        return documents.docs.map((document) => ({
            id: document.id,
            ...document.data()
        }));
    }
}
