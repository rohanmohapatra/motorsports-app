import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { FormulaECarComponent } from '.';
import { Loader } from '../../components/shared/loader';
import { FormulaE } from '../../firebase/formulae';
import { FormulaECar } from '../../models/FormulaECar';

const FormulaEPage = () => {
    const { id } = useGlobalSearchParams();
    const [formulaeDb] = useState(new FormulaE());
    const [carDetails, setCarDetails] = useState<FormulaECar | undefined>(
        undefined
    );

    useEffect(() => {
        formulaeDb.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as FormulaECar);
        });
    }, []);

    return carDetails ? (
        <FormulaECarComponent carDetails={carDetails} />
    ) : (
        <Loader />
    );
};

export default FormulaEPage;
