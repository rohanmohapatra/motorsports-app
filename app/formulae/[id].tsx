import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import Swiper from 'react-native-swiper';
import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import FELogo from '../../assets/motorsport-logos/FE.svg';
import GEN3Logo from '../../assets/common/gen3_electric.svg';
import { Loader } from '../../components/shared/loader';
import {
    Battery,
    Drivers,
    PowerTrain
} from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { darkBlue, white } from '../../components/theme/colors';
import { Formulae } from '../../firebase/formulae';
import { FormulaeCar } from '../../models/FormulaeCar';

const FormulaeDetails = ({
    carDetails
}: {
    carDetails: FormulaeCar | undefined;
}) => {
    if (!carDetails) {
        return null;
    }

    return (
        <Box h="$full">
            <Image
                size="full"
                source={require('../../assets/f1/formula1-mercedes.jpeg')}
                // source={carDetails.image}
                height={350}
                resizeMode="cover"
                alt={`${carDetails.teamNamePrimary} ${carDetails.teamNamePrimary}`}
            />

            <SpecificationsContainer tintColor={darkBlue} background={'$white'}>
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
                            color={darkBlue}
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
                                color={darkBlue}
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
                                color={darkBlue}
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
                            headingColor={darkBlue}
                        />
                    </VStack>
                    <GEN3Logo />
                </VStack>
            </SpecificationsContainer>
        </Box>
    );
};

const FormulaE = () => {
    const [formulaeDb] = useState(new Formulae());

    const [carDetailsList, setCarDetailsList] = useState<FormulaeCar[]>([]);

    useEffect(() => {
        const fetchCarDetails = async () => {
            const cars = ['envision-racing', 'mahindra-racing'];

            const detailsList = await Promise.all(
                cars.map(async (carId) => {
                    const data = await formulaeDb.getDetails(carId);
                    return objectToCamel(data ?? {}) as FormulaeCar;
                })
            );

            setCarDetailsList(detailsList);
        };

        fetchCarDetails();
    }, []);
    return carDetailsList.length > 0 ? (
        <Swiper loop={false} showsPagination={false}>
            {carDetailsList.map((carDetails, index) => (
                <FormulaeDetails key={index} carDetails={carDetails} />
            ))}
        </Swiper>
    ) : (
        <Loader />
    );
};

export default FormulaE;
