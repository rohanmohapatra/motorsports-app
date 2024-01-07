import { DocumentData } from 'firebase/firestore';

export interface HyperCar extends DocumentData {
    category: 'lmh' | 'lmdh';
    image: string;
    teamName: string;
    car: string;
    engine: string;
    engineDisplacement: string;
    engineType: string;
    engineHorsepower: string;
    electricMotor: string;
    electricHorsepower: string;
    transmission: string;
    chassis: string;
}
