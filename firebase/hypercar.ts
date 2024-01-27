import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { Base } from '.';

export class Hypercar extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'hypercar', id);
        return (await getDoc(docReference)).data();
    }

    async getAllDetails() {
        const documents = await getDocs(
            collection(this.getDatabase(), 'hypercar')
        );
        return documents.docs.map((document) => ({
            id: document.id,
            ...document.data()
        }));
    }
}
