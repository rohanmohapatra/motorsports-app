import React, { useEffect, useState } from 'react';
import { Box, Text, Image } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';
import Swiper from 'react-native-swiper';
import Logo from '../../assets/f1/F1.svg';
import Engine from '../../assets/common/engine.svg';
import Electric from '../../assets/common/transmission.svg';
import Transmission from '../../assets/common/electric.svg';
import { objectToCamel } from 'ts-case-convert';
import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';
import { neonGreen } from '../../components/theme/colors';

const F1Details = ({ carDetails }: { carDetails: F1Car | undefined }) => {
    if (!carDetails) {
        return null;
    }

    return (
        <Box
            style={{
                backgroundColor: 'black'
            }}
            // tintColor="gray"
            // source={require('../../assets/common/triangle.png')}
            // resizeMode="cover"
        >
            <Box h="$full" w={'$full'}>
                <Image
                    size="full"
                    source={require('../../assets/f1/formula1-mercedes.jpeg')}
                    // {carDetails.image}
                    height={300}
                />

                <Box alignItems="center">
                    <Logo height="100" width={'100'} />
                    <Text
                        // maxWidth={'$96'}
                        fontFamily="Horizon"
                        color={neonGreen}
                        fontSize={'$2xl'}
                    >
                        {carDetails?.teamName}
                        {/* {id} */}
                    </Text>
                    <Text fontFamily="Horizon" fontSize={'$2xl'}>
                        {carDetails?.car}
                        {/* {data.model} */}
                    </Text>
                </Box>

                <Box
                    mt={'$5'}
                    width={'$full'}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box>
                        <Box flexDirection="row" alignItems="center">
                            <Box
                                flexDirection="column"
                                alignItems="center"
                                margin={'$5'}
                            >
                                <Text
                                    color="white"
                                    fontSize={'$xs'}
                                    fontFamily="Horizon"
                                >
                                    {carDetails?.engineType}
                                    {/* {data['specifications'][0].value} */}
                                </Text>
                                <Text
                                    fontSize={'$xs'}
                                    fontFamily="Horizon"
                                    color={neonGreen}
                                >
                                    configuration
                                </Text>
                            </Box>
                            <Box
                                flexDirection="column"
                                alignItems="center"
                                margin={'$5'}
                            >
                                <Text
                                    color="white"
                                    fontSize={'$xs'}
                                    fontFamily="Horizon"
                                >
                                    {carDetails?.engineHorsepower} HP
                                    {/* {data['specifications'][3].value} */}
                                </Text>
                                <Text
                                    color={neonGreen}
                                    fontSize={'$xs'}
                                    fontFamily="Horizon"
                                >
                                    Power
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box padding={'$2'}>
                    <Box flexDirection="row" mt={'$2'}>
                        <Engine height="70" width={'100'} />
                        <Box flexDirection="column">
                            <Text
                                color="white"
                                fontSize={'$xs'}
                                fontFamily="Horizon"
                            >
                                {carDetails?.engine}
                                {/* {data['specifications'][1].value} */}
                            </Text>
                            <Text
                                color={neonGreen}
                                fontSize={'$xs'}
                                fontFamily="Horizon"
                            >
                                {carDetails?.engineDisplacement}
                                {/* {data['specifications'][5].value} */}
                            </Text>
                        </Box>
                    </Box>
                    <Box flexDirection="row" mt={'$2'} alignItems="center">
                        <Transmission height="40" width={'100'} />
                        <Text
                            color="white"
                            fontSize={'$xs'}
                            fontFamily="Horizon"
                        >
                            {carDetails?.electricMotor}
                            {/* {data['specifications'][6].value} */}
                        </Text>
                    </Box>
                    <Box flexDirection="row" mt={'$3'} alignItems="center">
                        <Electric height="50" width={'100'} />
                        <Text
                            color="white"
                            fontSize={'$xs'}
                            fontFamily="Horizon"
                        >
                            {carDetails?.transmission}
                            {/* {data['specifications'][2].value} */}
                        </Text>
                    </Box>
                </Box>
                <Box
                    // maxWidth={'$96'}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        color={neonGreen}
                        fontSize={'$sm'}
                        fontFamily="Horizon"
                    >
                        Drivers
                    </Text>
                    <Box
                        flexDirection="row"
                        mt={'$3'}
                        margin={'$10'}
                        alignItems="center"
                        // padding={'$10'}
                        // justifyContent="space-between"
                    >
                        <Text
                            marginRight={'$10'}
                            maxWidth={'$48'}
                            color="white"
                            fontSize={'$xs'}
                            fontFamily="Horizon"
                        >
                            {carDetails?.drivers[0]}
                            {/* {data['specifications'][4].value[0]} */}
                        </Text>
                        <Text
                            maxWidth={'$48'}
                            // w={'50%'}
                            color="white"
                            fontSize={'$xs'}
                            fontFamily="Horizon"
                        >
                            {carDetails?.drivers[1]}
                            {/* {data['specifications'][4].value[1]} */}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const f1 = () => {
    const { id } = useGlobalSearchParams();

    const [f1Db] = useState(new F1());
    const [carDetailsList, setCarDetailsList] = useState<F1Car[]>([]);

    useEffect(() => {
        const fetchCarDetails = async () => {
            const cars = [
                'redbull-rb19',
                'mercedes-w13',
                'williams-fw45',
                'ferrari-sf23'
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

export default f1;
