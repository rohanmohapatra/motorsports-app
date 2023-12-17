import { Box, VStack, Button, ButtonText, View } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

import Logo from './logo.svg';
import { Header } from '../components/home/Header';
import { darkBackground, neonGreen } from '../components/theme/colors';

const Home = () => {
    const navigation = useRouter();
    return (
        <View>
            <Box h="$full" justifyContent="center" bgColor={darkBackground}>
                <VStack space="xs" reversed={false} p="$4">
                    <Box
                        transform={[
                            { rotate: '40deg' },
                            { translateX: -80 },
                            { translateY: -200 }
                        ]}
                    >
                        <Logo height="450" />
                    </Box>
                    <Box mt="-$24">
                        <Header />
                    </Box>
                    <VStack space="md" width="$80" pt="$9">
                        <Button rounded="$full" bgColor={neonGreen}>
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                                onPress={() => {
                                    navigation.push('/gt3/mercedes-w13');
                                }}
                            >
                                Explore F1 Cars
                            </ButtonText>
                        </Button>
                        <Button rounded="$full" bgColor={neonGreen}>
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                            >
                                Explore Hypercars
                            </ButtonText>
                        </Button>
                        <Button rounded="$full" bgColor={neonGreen}>
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                                onPress={() => {
                                    navigation.push('/gt3/mclaren-720s');
                                }}
                            >
                                Explore GT3 Cars
                            </ButtonText>
                        </Button>
                    </VStack>
                </VStack>
            </Box>
        </View>
    );
};

export default Home;
