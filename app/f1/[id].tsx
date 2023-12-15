import { Box, Text, Image } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';
import Logo from '../../assets/f1/F1.svg';
// import Background from './triangle.svg';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { darkBackground, neonGreen } from '../../components/theme/colors';
import React from 'react';
import Engine from '../../assets/common/engine.svg';
import Electric from '../../assets/common/transmission.svg';
import Transmission from '../../assets/common/electric.svg';

const f1 = () => {
    const { id } = useGlobalSearchParams();
    const data = {
        // img: merc,
        name: 'Mercedes',
        model: 'W13',
        specifications: [
            {
                heading: 'Engine',
                // logo: require('../../assets/f1/engine.png'),
                value: 'V6 Turbo Charged'
            },
            {
                heading: 'EngineName',
                logo: require('../../assets/f1/formula1-mercedes.jpeg'),
                value: 'Mercedes-AMG F1 M14 E Performance'
            },
            {
                heading: 'Transmission',
                // logo: require('../../assets/f1/gear.png'),
                value: '8-Speed Hydraulics'
            },
            {
                heading: 'Horsepower',
                logo: require('../../assets/f1/formula1-mercedes.jpeg'),
                value: '1070'
            },
            {
                heading: 'Drivers',
                logo: require('../../assets/f1/formula1-mercedes.jpeg'),
                value: ['Lewis Hamilton', 'George Russel']
            },
            {
                heading: 'Liters',
                logo: require('../../assets/f1/formula1-mercedes.jpeg'),
                value: '1.6L'
            },
            {
                heading: 'next',
                value: 'MGU-H AND MGU-K'
            }
        ]
    };
    return (
        <>
            <ImageBackground
                style={{
                    backgroundColor: 'black'
                    // tintColor: 'white'
                }}
                tintColor="black"
                source={require('../../assets/common/triangle.png')}
                resizeMode="cover"
            >
                <Box h="$full" w={'$full'}>
                    <Image
                        size="full"
                        source={require('../../assets/f1/formula1-mercedes.jpeg')}
                        height={300}
                    />

                    <Box alignItems="center">
                        <Logo height="100" width={'100'} />
                        <Text
                            fontFamily="Horizon"
                            color={neonGreen}
                            fontSize={'$2xl'}
                        >
                            {id}
                        </Text>
                        <Text fontFamily="Horizon" fontSize={'$2xl'}>
                            {data.model}
                        </Text>
                        {/* <Text
                            mt={'$4'}
                            fontFamily="Horizon"
                            // color={neonGreen}
                            fontSize={'$sm'}
                        >
                            Specifications
                        </Text> */}
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
                                        {data['specifications'][0].value}
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
                                        {data['specifications'][3].value}
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
                                    {data['specifications'][1].value}
                                </Text>
                                <Text
                                    color={neonGreen}
                                    fontSize={'$xs'}
                                    fontFamily="Horizon"
                                >
                                    {data['specifications'][5].value}
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
                                {data['specifications'][6].value}
                            </Text>
                        </Box>
                        <Box flexDirection="row" mt={'$3'} alignItems="center">
                            <Electric height="50" width={'100'} />
                            <Text
                                color="white"
                                fontSize={'$xs'}
                                fontFamily="Horizon"
                            >
                                {data['specifications'][2].value}
                            </Text>
                        </Box>
                    </Box>
                    <Box alignItems="center">
                        <Text
                            color={neonGreen}
                            fontSize={'$sm'}
                            fontFamily="Horizon"
                        >
                            Drivers
                        </Text>
                        <Box flexDirection="row" mt={'$3'} margin={'$10'}>
                            <Text
                                w={'50%'}
                                color="white"
                                fontSize={'$xs'}
                                fontFamily="Horizon"
                            >
                                {data['specifications'][4].value[0]}
                            </Text>
                            <Text
                                w={'30%'}
                                color="white"
                                fontSize={'$xs'}
                                fontFamily="Horizon"
                            >
                                {data['specifications'][4].value[1]}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </ImageBackground>
        </>
    );
};

export default f1;
