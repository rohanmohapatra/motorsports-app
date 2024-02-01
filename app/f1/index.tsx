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
import { neonGreenLight } from '../../components/theme/colors';
import { F1 } from '../../firebase/f1';
import { F1Car } from '../../models/F1Car';

export const F1CarComponent = ({
    carDetails
}: {
    carDetails: F1Car | undefined;
}) => {
    if (!carDetails) {
        return null;
    }

    return (
        <Box h="$full">
            <Image
                size="full"
                source={{
                    uri: carDetails.image
                }}
                height={350}
                resizeMode="cover"
                alt={`${carDetails.brand} ${carDetails.model}`}
            />
            <SpecificationsContainer theme="dark">
                <VStack alignItems="center" h="$full" w="$full" space="4xl">
                    <VStack alignItems="center">
                        <Logo width="100" />
                        <VStack alignItems="center" gap={-6}>
                            <Text
                                fontFamily="Horizon"
                                color={neonGreenLight}
                                fontSize={24}
                                lineHeight="$3xl"
                            >
                                {carDetails?.teamName}
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={22}
                                lineHeight="$2xl"
                                color="white"
                            >
                                {carDetails?.car}
                            </Text>
                        </VStack>
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
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={8}
                                mt="-$2"
                                color={neonGreenLight}
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
                                color={neonGreenLight}
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
                            headingColor={neonGreenLight}
                        />
                    </VStack>
                </VStack>
            </SpecificationsContainer>
        </Box>
    );
};

const F1Page = () => {
    const [f1Db] = useState(new F1());
    const [carDetailsList, setCarDetailsList] = useState<F1Car[]>([]);

    useEffect(() => {
        f1Db.getAllDetails().then((data: any) => {
            setCarDetailsList(
                data.map((d: any) => objectToCamel(d ?? {}) as F1Car)
            );
        });
    }, []);
    return carDetailsList.length > 0 ? (
        <Swiper loop={false} showsPagination={false}>
            {carDetailsList.map((carDetails, index) => (
                <F1CarComponent key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    ) : (
        <Loader />
    );
};

export default F1Page;
