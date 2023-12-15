import { Text, VStack } from '@gluestack-ui/themed';
import { neonGreen } from '../theme/colors';

export const Header = () => {
    return (
        <VStack>
            <Text fontFamily="Horizon" fontSize="$4xl" lineHeight="$3xl">
                Home of
            </Text>
            <Text
                fontFamily="Horizon"
                fontSize="$5xl"
                lineHeight="$5xl"
                color={neonGreen}
            >
                Motor
            </Text>
            <Text
                fontFamily="Horizon"
                fontSize="$5xl"
                lineHeight="$5xl"
                marginTop="-$2"
                color={neonGreen}
            >
                Sports
            </Text>
        </VStack>
    );
};
