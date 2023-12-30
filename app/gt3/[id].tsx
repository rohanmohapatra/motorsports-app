import { Span } from '@expo/html-elements';
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Image,
    ScrollView,
    Text,
    VStack
} from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, ImageBackground, ScrollViewProps } from 'react-native';
import { objectToCamel } from 'ts-case-convert';

import GTLogo from '../../assets/motorsport-logos/GT.svg';
import { Loader } from '../../components/shared/loader';
import {
    Engine,
    GT3RoadcarLabel,
    GT3RoadcarLabelContainer,
    GT3RoadcarText,
    Transmission
} from '../../components/shared/specifications';
import { SpecificationsContainer } from '../../components/shared/specifications-container';
import { darkBackground, neonGreenLight } from '../../components/theme/colors';
import { GT3 } from '../../firebase/gt3';
import { GT3Car } from '../../models/GT3Car';

interface ScrollViewRefProps extends ScrollViewProps {
    scrollTo(
        options?:
            | number
            | {
                  x?: number | undefined;
                  y?: number | undefined;
                  animated?: boolean | undefined;
              }
    ): void;
}

const Gt3 = () => {
    const { id } = useGlobalSearchParams();
    const [gt3Db] = useState(new GT3());
    const [carDetails, setCarDetails] = useState<GT3Car | undefined>(undefined);
    const scrollViewRef = useRef<ScrollViewRefProps | null>(null);
    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        gt3Db.getDetails(String(id)).then((data) => {
            setCarDetails(objectToCamel(data ?? {}) as GT3Car);
        });
    }, []);

    return carDetails ? (
        <>
            <Image
                size="full"
                source={{
                    uri: 'https://www.topgear.com/sites/default/files/2023/02/McLaren_720S_GT3_Evo_3.jpg?w=892&h=502'
                }}
                height={350}
                resizeMode="cover"
                alt={`${carDetails.brand} ${carDetails.model}`}
            />

            <SpecificationsContainer>
                <ScrollView
                    ref={scrollViewRef}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={false}
                    style={{ width: windowWidth }}
                >
                    <VStack
                        alignItems="center"
                        // space={48}
                        gap={42}
                        paddingVertical="$5"
                        paddingBottom="$12"
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
                                    <Text as={Span}>°</Text>
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
                        <Button
                            rounded="$full"
                            bgColor={neonGreenLight}
                            marginTop={36}
                            marginBottom={22}
                            onPress={() => {
                                scrollViewRef.current?.scrollTo({
                                    y: 610,
                                    animated: true
                                });
                            }}
                        >
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                            >
                                View Road Car
                            </ButtonText>
                        </Button>
                    </VStack>
                    <VStack bgColor={neonGreenLight} h={950}>
                        <ImageBackground
                            source={require('../../assets/common/secondary_bg.png')}
                            style={{
                                height: '100%',
                                alignItems: 'center',
                                padding: 36
                            }}
                            imageStyle={{ opacity: 0.07 }}
                            resizeMode="cover"
                        >
                            <Text
                                fontFamily="Horizon"
                                color={darkBackground}
                                fontSize={14}
                            >
                                Based on
                            </Text>
                            <Text
                                fontFamily="Horizon"
                                color={darkBackground}
                                fontSize={18}
                            >
                                {carDetails.brand} {carDetails.modelRoadcar}
                            </Text>

                            <ImageBackground
                                source={{ uri: carDetails.imageRoadcar }}
                                style={{
                                    width: '100%',
                                    height: 200,
                                    marginTop: 32
                                }}
                                imageStyle={{
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                }}
                                resizeMode="contain"
                                alt={`${carDetails.brand} ${carDetails.modelRoadcar}`}
                            >
                                <LinearGradient
                                    colors={[
                                        'transparent',
                                        'rgba(34, 34, 34, 0.2)',
                                        darkBackground
                                    ]}
                                    style={{ height: 200, width: '100%' }}
                                />
                            </ImageBackground>
                            <Box
                                bg={darkBackground}
                                w="$full"
                                mt={-1}
                                pb="$8"
                                borderBottomLeftRadius={10}
                                borderBottomRightRadius={10}
                            >
                                <VStack
                                    alignItems="center"
                                    w="$full"
                                    px="$4"
                                    space="xl"
                                >
                                    <GT3RoadcarLabelContainer>
                                        <GT3RoadcarLabel>Power</GT3RoadcarLabel>
                                        <GT3RoadcarText>
                                            {carDetails.engineHorsepowerRoadcar}{' '}
                                            HP
                                        </GT3RoadcarText>
                                    </GT3RoadcarLabelContainer>
                                    <GT3RoadcarLabelContainer>
                                        <GT3RoadcarLabel>
                                            Torque
                                        </GT3RoadcarLabel>
                                        <GT3RoadcarText>
                                            {carDetails.engineTorqueRoadcar} NM
                                        </GT3RoadcarText>
                                    </GT3RoadcarLabelContainer>
                                    <GT3RoadcarLabelContainer>
                                        <GT3RoadcarLabel>
                                            Engine
                                        </GT3RoadcarLabel>
                                        <GT3RoadcarText>
                                            {carDetails.engineRoadcar}
                                        </GT3RoadcarText>
                                    </GT3RoadcarLabelContainer>
                                    <GT3RoadcarLabelContainer>
                                        <GT3RoadcarLabel>
                                            Transmission
                                        </GT3RoadcarLabel>
                                        <GT3RoadcarText>
                                            {carDetails.transmissionRoadcar}
                                        </GT3RoadcarText>
                                    </GT3RoadcarLabelContainer>
                                </VStack>
                            </Box>
                        </ImageBackground>
                    </VStack>
                </ScrollView>
            </SpecificationsContainer>
        </>
    ) : (
        <Loader />
    );
};

export default Gt3;
