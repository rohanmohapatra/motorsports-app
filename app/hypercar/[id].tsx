import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import LMDHLogo from '../../assets/motorsport-logos/LMDH.svg';
import LMHLogo from '../../assets/motorsport-logos/LMH.svg';
import { Loader } from '../../components/shared/loader';
import {
    Chassis,
    Electric,
    Engine,
    Transmission
} from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { neonGreenLight } from '../../components/theme/colors';
import { Hypercar } from '../../firebase/hypercar';
import { HyperCar } from '../../models/HyperCar';

const HypercarComponent = () => {
    const { id } = useGlobalSearchParams();
    const [hypercarDb] = useState(new Hypercar());
    const [carDetails, setCarDetails] = useState<HyperCar | undefined>(
        undefined
    );

    useEffect(() => {
        hypercarDb.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as HyperCar);
        });
    }, []);

    return carDetails ? (
        <Box h="$full">
            <Image
                size="full"
                source={{
                    uri: carDetails.image
                }}
                height={350}
                resizeMode="cover"
                alt={`${carDetails.teamName} ${carDetails.car}`}
            />

            <SpecificationsContainer>
                <VStack
                    alignItems="center"
                    h="$full"
                    w="$full"
                    space="4xl"
                    paddingVertical="$5"
                >
                    {carDetails.category === 'lmh' ? (
                        <LMHLogo style={{ marginLeft: 14 }} height={42} />
                    ) : (
                        <LMDHLogo style={{ marginLeft: 14 }} height={42} />
                    )}
                    <VStack alignItems="center">
                        <Text
                            fontFamily="Horizon"
                            color={neonGreenLight}
                            fontSize={36}
                            lineHeight="$3xl"
                        >
                            {carDetails.teamName}
                        </Text>
                        <Text
                            fontFamily="Horizon"
                            fontSize={32}
                            lineHeight="$2xl"
                            color="white"
                        >
                            {carDetails.car}
                        </Text>
                    </VStack>
                    <HStack
                        alignContent="space-between"
                        width="$full"
                        space="4xl"
                        justifyContent="center"
                        paddingTop="$4"
                    >
                        <VStack alignItems="center">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$lg"
                                color="white"
                            >
                                {carDetails.engineHorsepower} HP
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={10}
                                mt="-$2"
                                color={neonGreenLight}
                            >
                                ICE Power
                            </Text>
                        </VStack>
                        <VStack alignItems="center" ml="$8">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$lg"
                                color="white"
                            >
                                {carDetails.electricHorsepower} HP
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize={10}
                                mt="-$2"
                                color={neonGreenLight}
                            >
                                Electric Power
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
                            displacement={`${carDetails.engineDisplacement} ${carDetails.engineType}`}
                        />
                        <Electric text={carDetails.electricMotor} />
                        <Transmission text={carDetails.transmission} />
                        <Chassis text={carDetails.chassis} />
                    </VStack>
                </VStack>
            </SpecificationsContainer>
        </Box>
    ) : (
        <Loader />
    );
};

export default HypercarComponent;
