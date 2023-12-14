import { Box, VStack, Button, ButtonText } from '@gluestack-ui/themed';
import Logo from './logo.svg';
import { darkBackground, neonGreen } from '../components/theme/colors';
import { Header } from '../components/home/Header';
import { useRouter } from 'expo-router';

const Home = () => {
    const navigation = useRouter();
    return (
        <Box h="$full" justifyContent="center" bgColor={darkBackground}>
            <VStack space="xs" reversed={false} p="$4">
                <Box
                    transform={[
                        { rotate: '40deg' },
                        { translateX: -90 },
                        { translateY: -170 }
                    ]}
                >
                    <Logo height="450" />
                </Box>
                <Box mt="-$24">
                    <Header />
                </Box>
                <VStack space="md" width="$80" pt="$9">
                    <Button rounded="$full" bgColor={neonGreen}>
                        <ButtonText fontFamily="Horizon" color={darkBackground}>
                            Explore F1 Cars
                        </ButtonText>
                    </Button>
                    <Button rounded="$full" bgColor={neonGreen}>
                        <ButtonText fontFamily="Horizon" color={darkBackground}>
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
    );
};

export default Home;
