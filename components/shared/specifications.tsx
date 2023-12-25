import { HStack, Text, VStack } from '@gluestack-ui/themed';

import EngineLogo from '../../assets/common/engine.svg';
import TransmissionLogo from '../../assets/common/transmission.svg';
import { neonGreenLight } from '../theme/colors';

interface TransmissionProps {
    text: string;
}
export const Transmission = ({ text }: TransmissionProps) => {
    return (
        <HStack alignItems="center" space="md">
            <TransmissionLogo height="32" width="32" />
            <Text color="white" fontSize="$sm" fontFamily="Horizon">
                {text}
            </Text>
        </HStack>
    );
};

interface EngineProps {
    text: string;
    displacement: string;
}

export const Engine = ({ text, displacement }: EngineProps) => {
    return (
        <HStack alignItems="center" space="md">
            <EngineLogo height="50" width="32" />
            <VStack>
                <Text color="white" fontSize="$sm" fontFamily="Horizon">
                    {text}
                </Text>
                <Text
                    color={neonGreenLight}
                    fontSize="$xs"
                    fontFamily="Horizon"
                    marginTop="-$1"
                >
                    {displacement}
                </Text>
            </VStack>
        </HStack>
    );
};
