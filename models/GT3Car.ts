import { DocumentData } from 'firebase/firestore';

export interface GT3Car extends DocumentData {
    image: string;
    brand: string;
    model: string;
    engine: string;
    electricMotor: string;
    engineDisplacement: string;
    engineHorsepower: string;
    engineTorque: string;
    engineType: string;
    transmission: string;

    //RoadCar Stuff
    modelRoadcar: string;
    imageRoadcar: string;
    engineHorsepowerRoadcar: string;
    engineTorqueRoadcar: string;
    engineRoadcar: string;
    transmissionRoadcar: string;
}
