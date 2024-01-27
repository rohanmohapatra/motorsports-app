import { DocumentData } from 'firebase/firestore';

export interface F1Car extends DocumentData {
    image: string;
    teamName: string;
    car: string;
    engine: string;
    engineDisplacement: string;
    engineType: string;
    engineHorsepower: string;
    electricMotor: string;
    transmission: string;
    drivers: string[];
}
