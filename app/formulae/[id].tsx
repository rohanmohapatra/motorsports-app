import { useGlobalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { FormulaEDetails } from '.';
import { Loader } from '../../components/shared/loader';
import { FormulaE } from '../../firebase/formulae';
import { FormulaECar } from '../../models/FormulaECar';

const FormulaEPage = () => {
    const { id } = useGlobalSearchParams();
    const [formulaEDb] = useState(new FormulaE());
    const [carDetails, setCarDetails] = useState<FormulaECar | undefined>(
        undefined
    );

    useEffect(() => {
        formulaEDb.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as FormulaECar);
        });
    }, []);

    return carDetails ? (
        <FormulaEDetails carDetails={carDetails} />
    ) : (
        <Loader />
    );
};

export default FormulaEPage;
