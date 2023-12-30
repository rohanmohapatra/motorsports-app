import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { ReactElement } from 'react';

import ChassisLogo from '../../assets/common/chassis.svg';
import BatteryLogo from '../../assets/common/electric.svg';
import EngineLogo from '../../assets/common/engine.svg';
import TransmissionLogo from '../../assets/common/transmission.svg';
import { neonGreenLight } from '../theme/colors';

interface SingleProps {
    text: string;
}
export const Transmission = ({ text }: SingleProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <TransmissionLogo height="32" width="32" />
            <Text color="white" fontSize="$xs" fontFamily="Horizon" w="$56">
                {text}
            </Text>
        </HStack>
    );
};

interface EngineProps extends SingleProps {
    displacement: string;
}

export const Engine = ({ text, displacement }: EngineProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <EngineLogo height="50" width="32" />
            <VStack w="$56">
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

export const Chassis = ({ text }: SingleProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <ChassisLogo height="32" width="32" />
            <HStack w="$56">
                <Text color="white" fontSize="$sm" fontFamily="Horizon">
                    {text}
                </Text>
                <Text
                    color={neonGreenLight}
                    fontSize="$sm"
                    fontFamily="Horizon"
                >
                    {' '}
                    Chassis
                </Text>
            </HStack>
        </HStack>
    );
};

export const Electric = ({ text }: SingleProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <BatteryLogo height="32" width="32" />
            <Text color="white" fontSize="$sm" fontFamily="Horizon" w="$56">
                {text}
            </Text>
        </HStack>
    );
};

interface GT3RoadcarProps {
    children: ReactElement[] | string | string[];
}

export const GT3RoadcarLabelContainer = ({ children }: GT3RoadcarProps) => {
    return (
        <HStack
            justifyContent="space-between"
            w={300}
            borderColor={neonGreenLight}
            borderWidth="$2"
            rounded="$lg"
            padding="$2"
            alignItems="center"
        >
            {children}
        </HStack>
    );
};

export const GT3RoadcarLabel = ({ children }: GT3RoadcarProps) => {
    return (
        <Text w={145} fontSize={12} opacity={0.8}>
            {children}
        </Text>
    );
};

export const GT3RoadcarText = ({ children }: GT3RoadcarProps) => {
    return (
        <Text w="$32" fontSize={10} textAlign="right">
            {children}
        </Text>
    );
};
