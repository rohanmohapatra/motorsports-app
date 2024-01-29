import { useGlobalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { F1CarComponent } from '.';
import { Loader } from '../../components/shared/loader';
import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';

const F1Page = () => {
    const { id } = useGlobalSearchParams();
    const [f1Db] = useState(new F1());
    const [carDetails, setCarDetails] = useState<F1Car | undefined>(undefined);

    useEffect(() => {
        f1Db.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as F1Car);
        });
    }, []);

    return carDetails ? <F1CarComponent carDetails={carDetails} /> : <Loader />;
};

export default F1Page;
