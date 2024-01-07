import { Span } from '@expo/html-elements';
import { Box, Text, Image, VStack, HStack } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { objectToCamel } from 'ts-case-convert';

import Logo from '../../assets/f1/F1.svg';
import { Loader } from '../../components/shared/loader';
import {
    Drivers,
    Electric,
    Engine,
    Transmission
} from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { neonGreen } from '../../components/theme/colors';
import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';

const F1Details = ({ carDetails }: { carDetails: F1Car | undefined }) => {
    if (!carDetails) {
        return null;
    }

    return (
        <Box h="$full">
            <Image
                size="full"
                source={require('../../assets/f1/formula1-mercedes.jpeg')}
                height={350}
                resizeMode="cover"
                alt={`${carDetails.brand} ${carDetails.model}`}
            />
            <SpecificationsContainer theme="dark">
                <VStack
                    alignItems="center"
                    h="$full"
                    w="$full"
                    space="4xl"
                    paddingVertical="$5"
                >
                    <VStack alignItems="center">
                        <Logo height="100" width="100" />
                        <Text
                            // maxWidth={'$96'}
                            fontFamily="Horizon"
                            color={neonGreen}
                            fontSize="$2xl"
                        >
                            {carDetails?.teamName}
                        </Text>
                        <Text fontFamily="Horizon" fontSize="$2xl">
                            {carDetails?.car}
                        </Text>
                    </VStack>

                    <HStack
                        alignContent="space-between"
                        width="$full"
                        space="4xl"
                        justifyContent="center"
                    >
                        <VStack alignItems="center">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$xs"
                                color="white"
                            >
                                {carDetails?.engineType}
                                <Text as={Span}>°</Text>
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={8}
                                mt="-$2"
                                color={neonGreen}
                            >
                                Configuration
                            </Text>
                        </VStack>
                        <VStack alignItems="center">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$xs"
                                color="white"
                            >
                                {carDetails.engineHorsepower} HP
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={8}
                                mt="-$2"
                                color={neonGreen}
                            >
                                Power
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack
                        alignItems="center"
                        space="xl"
                        paddingTop="$2"
                        w="$full"
                    >
                        <Engine
                            text={carDetails.engine}
                            displacement={`${carDetails.engineDisplacement}`}
                        />
                        <Electric text={carDetails.electricMotor} />
                        <Transmission text={carDetails.transmission} />
                        <Drivers
                            drivers={carDetails.drivers}
                            textColor="white"
                            headingColor={neonGreen}
                        />
                    </VStack>
                </VStack>
            </SpecificationsContainer>
        </Box>
    );
};

const F1Page = () => {
    // const { id } = useGlobalSearchParams();

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

    // console.log(carDetailsList);
    return carDetailsList.length > 0 ? (
        <Swiper loop={false}>
            {carDetailsList.map((carDetails, index) => (
                <F1Details key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    ) : (
        <Loader />
    );
};

export default F1Page;
