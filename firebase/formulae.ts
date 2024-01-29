import { doc, getDoc } from 'firebase/firestore';

import { Base } from '.';

export class FormulaE extends Base {
    async getDetails(id: string) {
        const docReference = doc(this.getDatabase(), 'formulae', id);
        return (await getDoc(docReference)).data();
    }

    async getFormulaeDocumentNames(): Promise<string[]> {
        return this.getDocumentNames('formulae');
    }
}
