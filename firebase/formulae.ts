import { doc, getDoc } from 'firebase/firestore';

import { Base } from '.';

export class Formulae extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'formulae', id);
        return (await getDoc(docReference)).data();
    }
}
