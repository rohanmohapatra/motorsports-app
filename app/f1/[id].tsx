import { Box, Text, Image } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { objectToCamel } from 'ts-case-convert';

import Transmission from '../../assets/common/electric.svg';
import Engine from '../../assets/common/engine.svg';
import Electric from '../../assets/common/transmission.svg';
import Logo from '../../assets/f1/F1.svg';
import { neonGreen } from '../../components/theme/colors';
import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';

const F1Details = ({ carDetails }: { carDetails: F1Car | undefined }) => {
    if (!carDetails) {
        return null;
    }

    return (
        <Box
            style={{
                backgroundColor: 'black'
            }}
        >
            <Box h="$full" w="$full">
                <Image
                    size="full"
                    source={require('../../assets/f1/formula1-mercedes.jpeg')}
                    height={300}
                />

                <Box alignItems="center">
                    <Logo height="100" width="100" />
                    <Text
                        fontFamily="Horizon"
                        color={neonGreen}
                        fontSize="$2xl"
                    >
                        {carDetails?.teamName}
                    </Text>
                    <Text fontFamily="Horizon" fontSize="$2xl">
                        {carDetails?.car}
                    </Text>
                </Box>

                <Box
                    mt="$5"
                    width="$full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box>
                        <Box flexDirection="row" alignItems="center">
                            <Box
                                flexDirection="column"
                                alignItems="center"
                                margin="$5"
                            >
                                <Text
                                    color="white"
                                    fontSize="$xs"
                                    fontFamily="Horizon"
                                >
                                    {carDetails?.engineType}
                                </Text>
                                <Text
                                    fontSize="$xs"
                                    fontFamily="Horizon"
                                    color={neonGreen}
                                >
                                    configuration
                                </Text>
                            </Box>
                            <Box
                                flexDirection="column"
                                alignItems="center"
                                margin="$5"
                            >
                                <Text
                                    color="white"
                                    fontSize="$xs"
                                    fontFamily="Horizon"
                                >
                                    {carDetails?.engineHorsepower} HP
                                </Text>
                                <Text
                                    color={neonGreen}
                                    fontSize="$xs"
                                    fontFamily="Horizon"
                                >
                                    Power
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding="$2">
                    <Box flexDirection="row" mt="$2">
                        <Engine height="70" width="100" />
                        <Box flexDirection="column">
                            <Text
                                color="white"
                                fontSize="$xs"
                                fontFamily="Horizon"
                            >
                                {carDetails?.engine}
                            </Text>
                            <Text
                                color={neonGreen}
                                fontSize="$xs"
                                fontFamily="Horizon"
                            >
                                {carDetails?.engineDisplacement}
                            </Text>
                        </Box>
                    </Box>
                    <Box flexDirection="row" mt="$2" alignItems="center">
                        <Transmission height="40" width="100" />
                        <Text color="white" fontSize="$xs" fontFamily="Horizon">
                            {carDetails?.electricMotor}
                        </Text>
                    </Box>
                    <Box flexDirection="row" mt="$3" alignItems="center">
                        <Electric height="50" width="100" />
                        <Text color="white" fontSize="$xs" fontFamily="Horizon">
                            {carDetails?.transmission}
                        </Text>
                    </Box>
                </Box>
                <Box alignItems="center" justifyContent="center">
                    <Text color={neonGreen} fontSize="$sm" fontFamily="Horizon">
                        Drivers
                    </Text>
                    <Box
                        flexDirection="row"
                        mt="$3"
                        margin="$10"
                        alignItems="center"
                    >
                        <Text
                            marginRight="$10"
                            maxWidth="$48"
                            color="white"
                            fontSize="$xs"
                            fontFamily="Horizon"
                        >
                            {carDetails?.drivers[0]}
                        </Text>
                        <Text
                            maxWidth="$48"
                            color="white"
                            fontSize="$xs"
                            fontFamily="Horizon"
                        >
                            {carDetails?.drivers[1] || 'Default Team Name'}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const F1Page = () => {
    const [f1Db] = useState(new F1());
    const [carDetailsList, setCarDetailsList] = useState<F1Car[]>([]);

    useEffect(() => {
        const fetchCarDetails = async () => {
            const cars = [
                'redbull-rb19',
                'mercedes-w14',
                'williams-fw45',
                'ferrari-sf23',
                'alpine-a523',
                'mclaren-mcl60'
            ];

            const detailsList = await Promise.all(
                cars.map(async (carId) => {
                    const data = await f1Db.getDetails(carId);
                    return objectToCamel(data ?? {}) as F1Car;
                })
            );

            setCarDetailsList(detailsList);
        };

        fetchCarDetails();
    }, []);

    return (
        <Swiper loop={false}>
            {carDetailsList.map((carDetails, index) => (
                <F1Details key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    );
};

export default F1Page;
