import { Box, Text, Image } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';
import Logo from './F1.svg';
import Background from './triangle.svg';
import { ImageBackground } from 'react-native';

const f1 = () => {
    const { id } = useGlobalSearchParams();
    const data = {
        // img: merc,
        name: 'Mercedes',
        model: 'W13',
        specifications: [
            {
                engine: 'Mercedes-AMG F1 M14 E Performance',
                engSpec: '1.6 L V6 Turbo Charged',
                transmission: '8-Speed Hydraulics',
                hpower: 1070,
                drivers: ['Lewis Hamilton', 'George Russel']
            }
        ]
    };
    return (
        <>
            <Box h="$full" backgroundColor="$black">
                <Image
                    size="full"
                    source={require('../../assets/f1/formula1-mercedes.jpeg')}
                    height={300}
                />
                <ImageBackground
                    source={require('../../assets/f1/formula1-mercedes.jpeg')}
                    style={{
                        flex: 1,
                        // resizeMode: 'cover',
                        justifyContent: 'center'
                    }}
                >
                    <Box alignItems="center">
                        <Logo height="100" width={'100'} />
                        <Text fontFamily="Horizon">{id}</Text>
                    </Box>
                </ImageBackground>
            </Box>
        </>
    );
};

export default f1;
