import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { HyperCarComponent } from '.';
import { Loader } from '../../components/shared/loader';
import { Hypercar } from '../../firebase/hypercar';
import { HyperCar } from '../../models/HyperCar';

const HyperCarPage = () => {
    const { id } = useGlobalSearchParams();
    const [hypercarDb] = useState(new Hypercar());
    const [carDetails, setCarDetails] = useState<HyperCar | undefined>(
        undefined
    );

    useEffect(() => {
        hypercarDb.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as HyperCar);
        });
    }, []);

    return carDetails ? (
        <HyperCarComponent carDetails={carDetails} />
    ) : (
        <Loader />
    );
};

export default HyperCarPage;
