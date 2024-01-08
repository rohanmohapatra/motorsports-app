import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { Gt3CarComponent } from '.';
import { Loader } from '../../components/shared/loader';
import { GT3 } from '../../firebase/gt3';
import { GT3Car } from '../../models/GT3Car';

const Gt3 = () => {
    const { id } = useGlobalSearchParams();
    const [gt3Db] = useState(new GT3());
    const [carDetails, setCarDetails] = useState<GT3Car | undefined>(undefined);

    useEffect(() => {
        gt3Db.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as GT3Car);
        });
    }, []);

    return carDetails ? (
        <Gt3CarComponent carDetails={carDetails} />
    ) : (
        <Loader />
    );
};

export default Gt3;
