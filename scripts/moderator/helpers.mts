export const f1 = [
    { field: 'team_name', question: 'Team Name?' },
    { field: 'car', question: 'Car?' },
    { field: 'drivers', question: 'Drivers? (Comma-separated)' },
    { field: 'electric_motor', question: 'Electric Motor?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' }
];

export const hypercar = [
    { field: 'team_name', question: 'Team Name?' },
    { field: 'car', question: 'Car?' },
    { field: 'electric_motor', question: 'Electric Motor Name?' },
    { field: 'electric_horsepower', question: 'Electric Motor Horsepower?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' },
    { field: 'chassis', question: 'Chassis?' }
];

export const gt3 = [
    { field: 'brand', question: 'Brand Name?' },
    { field: 'model', question: 'Model?' },
    { field: 'electric_motor', question: 'Electric Motor?' },
    { field: 'engine', question: 'Engine Name?' },
    { field: 'engine_displacement', question: 'Engine Displacement?' },
    { field: 'engine_horsepower', question: 'Engine Horsepower?' },
    { field: 'engine_torque', question: 'Engine Torque?' },
    { field: 'engine_type', question: 'Engine Configuration?' },
    { field: 'transmission', question: 'Transmission?' },
    { field: 'model_roadcar', question: 'Based on which Roadcar?' },
    { field: 'image_roadcar', question: 'Roadcar Image?' },
    { field: 'engine_roadcar', question: 'Roadcar Engine?' },
    {
        field: 'engine_horsepower_roadcar',
        question: 'Roadcar Engine Horsepower?'
    },
    { field: 'engine_torque_roadcar', question: 'Roadcar Engine Torque?' },
    { field: 'transmission_roadcar', question: 'Roadcar Transmission?' }
];

export const formula_e = [
    { field: 'team_name_primary', question: 'Team Name First Line?' },
    { field: 'team_name_secondary', question: 'Team Name Second Line?' },
    { field: 'image', question: 'Car Image?' },
    { field: 'drivers', question: 'Drivers? (Comma-separated)', array: true },
    { field: 'battery_supplier', question: 'Battery Supplier?' },
    {
        field: 'battery_energy',
        question: 'How much energy does the Battery generate?'
    },
    { field: 'electric_power', question: 'Electric Power?' },
    { field: 'regeneration_power', question: 'Regeneration Power?' },
    { field: 'powertrain', question: 'Powertrain?' }
];

export type SeriesType = symbol | 'f1' | 'gt3' | 'hypercar' | 'formulae';
