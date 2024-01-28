import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { objectToCamel } from 'ts-case-convert';

import GEN3Logo from '../../assets/common/gen3_electric.svg';
import FELogo from '../../assets/motorsport-logos/FE.svg';
import { Loader } from '../../components/shared/loader';
import {
    Battery,
    Drivers,
    PowerTrain
} from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { flashBlue } from '../../components/theme/colors';
import { FormulaE } from '../../firebase/formulae';
import { FormulaECar } from '../../models/FormulaECar';

export const FormulaEDetails = ({
    carDetails
}: {
    carDetails: FormulaECar | undefined;
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
                alt={`${carDetails.teamNamePrimary} ${carDetails.teamNamePrimary}`}
            />

            <SpecificationsContainer theme="light">
                <VStack
                    alignItems="center"
                    h="$full"
                    w="$full"
                    space="2xl"
                    paddingVertical="$5"
                    flex={1}
                >
                    <FELogo />
                    <VStack alignItems="center">
                        <Text
                            fontFamily="Horizon"
                            color={flashBlue}
                            fontSize={40}
                            lineHeight="$3xl"
                        >
                            {carDetails.teamNamePrimary}
                        </Text>
                        <Text
                            fontFamily="Horizon"
                            fontSize={32}
                            lineHeight="$2xl"
                            color="black"
                        >
                            {carDetails.teamNameSecondary}
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
                                color="black"
                            >
                                {carDetails.electricPower} KW
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize="$2xs"
                                mt="-$2"
                                color={flashBlue}
                            >
                                Power
                            </Text>
                        </VStack>

                        <VStack alignItems="center">
                            <Text
                                fontFamily="Horizon"
                                fontSize="$md"
                                color="black"
                            >
                                {carDetails.regenerationPower} KW
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                fontSize="$2xs"
                                mt="-$2"
                                color={flashBlue}
                            >
                                Regeneration
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack
                        alignItems="center"
                        space="xl"
                        paddingTop="$6"
                        height="$72"
                    >
                        <Battery
                            text={carDetails.batterySupplier}
                            energy={carDetails.batteryEnergy}
                        />
                        <PowerTrain text={carDetails.powertrain} />
                        <Drivers
                            drivers={carDetails.drivers}
                            textColor="black"
                            headingColor={flashBlue}
                        />
                    </VStack>
                    <GEN3Logo />
                </VStack>
            </SpecificationsContainer>
        </Box>
    );
};

const FormulaEPage = () => {
    const [formulaEDb] = useState(new FormulaE());

    const [carDetailsList, setCarDetailsList] = useState<FormulaECar[]>([]);

    useEffect(() => {
        formulaEDb.getAllDetails().then((data: any) => {
            setCarDetailsList(
                data.map((d: any) => objectToCamel(d ?? {}) as FormulaECar)
            );
        });
    }, []);
    return carDetailsList.length > 0 ? (
        <Swiper loop={false} showsPagination={false}>
            {carDetailsList.map((carDetails, index) => (
                <FormulaEDetails key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    ) : (
        <Loader />
    );
};

export default FormulaEPage;
