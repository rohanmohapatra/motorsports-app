import { doc, getDoc } from 'firebase/firestore';

import { Base } from '.';

export class Hypercar extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'hypercar', id);
        return (await getDoc(docReference)).data();
    }
}
