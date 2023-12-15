import { Box, Text } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';

const Gt3 = () => {
    const { id } = useGlobalSearchParams();
    const [f1Db] = useState(new F1());
    const [carDetails, setCarDetails] = useState<F1Car | undefined>(undefined);

    useEffect(() => {
        f1Db.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as F1Car);
        });
    }, []);

    return (
        carDetails && (
            <Box justifyContent="center" h="$full">
                <Text fontFamily="Horizon">{carDetails.teamName}</Text>
                <Text fontFamily="Horizon">{carDetails.car}</Text>
            </Box>
        )
    );
};

export default Gt3;
