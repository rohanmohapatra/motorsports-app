import { DocumentData } from 'firebase/firestore';

export interface FormulaeCar extends DocumentData {
    batteryEnergy: string;
    batterySupplier: string;
    drivers: string[];
    electricPower: string;
    image: string;
    powertrain: string;
    regenerationPower: string;
    teamNamePrimary: string;
    teamNameSecondary: string;
}
