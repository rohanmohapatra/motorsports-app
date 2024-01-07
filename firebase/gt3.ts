import { doc, getDoc } from 'firebase/firestore';

import { Base } from '.';

export class GT3 extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'gt3', id);
        return (await getDoc(docReference)).data();
    }
}
