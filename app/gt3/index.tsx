import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';
import { objectToCamel } from 'ts-case-convert';

import GTLogo from '../../assets/motorsport-logos/GT.svg';
import { Loader } from '../../components/shared/loader';
import { Engine, Transmission } from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { neonGreenLight } from '../../components/theme/colors';
import { GT3 } from '../../firebase/gt3';
import { GT3Car } from '../../models/GT3Car';

export const Gt3CarComponent = ({
    carDetails
}: {
    carDetails: GT3Car | undefined;
}) => {
    if (!carDetails) {
        return null;
    }
    return (
        <Box h="$full">
            <Image
                size="full"
                source={{
                    uri: 'https://www.topgear.com/sites/default/files/2023/02/McLaren_720S_GT3_Evo_3.jpg?w=892&h=502'
                }}
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
                    <GTLogo />
                    <VStack alignItems="center">
                        <Text
                            fontFamily="Horizon"
                            color={neonGreenLight}
                            fontSize={40}
                            lineHeight="$3xl"
                        >
                            {carDetails.brand}
                        </Text>
                        <Text
                            fontFamily="Horizon"
                            fontSize={32}
                            lineHeight="$2xl"
                            color="white"
                        >
                            {carDetails.model}
                        </Text>
                    </VStack>
                    <VStack alignItems="center" paddingTop="$2">
                        <Text fontFamily="Horizon" fontSize={12} color="white">
                            Road Car
                        </Text>
                        <Text
                            marginTop="-$2"
                            fontFamily="Horizon"
                            fontSize={12}
                            color={neonGreenLight}
                        >
                            Specifications
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
                                fontSize="$md"
                                color="white"
                            >
                                {carDetails.engineType}
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
                                fontSize="$md"
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
                        <VStack alignItems="center">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$md"
                                color="white"
                            >
                                {carDetails.engineTorque} NM
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={8}
                                mt="-$2"
                                color={neonGreenLight}
                            >
                                Torque
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack alignItems="center" space="xl" paddingTop="$6">
                        <Engine
                            text={carDetails.engine}
                            displacement={carDetails.engineDisplacement}
                        />
                        <Transmission text={carDetails.transmission} />
                    </VStack>
                </VStack>
            </SpecificationsContainer>
        </Box>
    );
};

const GT3Page = () => {
    const [gt3Db] = useState(new GT3());
    const [carDetailsList, setCarDetailsList] = useState<GT3Car[]>([]);
    useEffect(() => {
        gt3Db.getAllDetails().then((data: any) => {
            setCarDetailsList(
                data.map((d: any) => objectToCamel(d ?? {}) as GT3Car)
            );
        });
    }, []);

    return carDetailsList.length > 0 ? (
        <Swiper loop={false} showsPagination={false}>
            {carDetailsList.map((carDetails, index) => (
                <Gt3CarComponent key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    ) : (
        <Loader />
    );
};

export default GT3Page;
