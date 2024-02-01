import { Box, VStack, Button, ButtonText, View } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

import Logo from './logo.svg';
import { useDrawer } from '../components/drawer/drawer-context';
import { Header } from '../components/home/Header';
import { darkBackground, neonGreen } from '../components/theme/colors';

const Home = () => {
    const navigation = useRouter();
    const { initialDrawerConfig, setConfig } = useDrawer();
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
                        <Button
                            rounded="$full"
                            bgColor={neonGreen}
                            onPress={() => {
                                setConfig({ ...initialDrawerConfig, f1: true });
                                navigation.push('/f1');
                            }}
                        >
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                            >
                                Explore F1 Cars
                            </ButtonText>
                        </Button>
                        <Button
                            rounded="$full"
                            bgColor={neonGreen}
                            onPress={() => {
                                setConfig({
                                    ...initialDrawerConfig,
                                    hyper: true
                                });
                                navigation.push('/hypercar');
                            }}
                        >
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                                fontSize="$sm"
                            >
                                Explore Hypercars
                            </ButtonText>
                        </Button>
                        <Button
                            rounded="$full"
                            bgColor={neonGreen}
                            onPress={() => {
                                setConfig({
                                    ...initialDrawerConfig,
                                    gt3: true
                                });
                                navigation.push('/gt3');
                            }}
                        >
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                            >
                                Explore GT3 Cars
                            </ButtonText>
                        </Button>

                        <Button
                            rounded="$full"
                            bgColor={neonGreen}
                            onPress={() => {
                                setConfig({ ...initialDrawerConfig, fe: true });
                                navigation.push('/formulae');
                            }}
                        >
                            <ButtonText
                                fontFamily="Horizon"
                                color={darkBackground}
                            >
                                Explore FE Cars
                            </ButtonText>
                        </Button>
                    </VStack>
                </VStack>
            </Box>
        </View>
    );
};

export default Home;
