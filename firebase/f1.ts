import { doc, getDoc } from 'firebase/firestore';

import { Base } from '.';

export class F1 extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'f1', id);
        return (await getDoc(docReference)).data();
    }
}
