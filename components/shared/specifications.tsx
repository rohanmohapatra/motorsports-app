import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { ReactElement } from 'react';

import ChassisLogo from '../../assets/common/chassis.svg';
import BatteryLogo from '../../assets/common/electric.svg';
import EngineLogo from '../../assets/common/engine.svg';
import TransmissionLogo from '../../assets/common/transmission.svg';
import { flashBlue, neonGreenLight } from '../theme/colors';

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
                <Text color="white" fontSize="$xs" fontFamily="Horizon">
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

interface BatteryProps extends SingleProps {
    energy: string;
}

export const Battery = ({ text, energy }: BatteryProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <BatteryLogo height="50" width="32" fill="black" />
            <VStack w="$64">
                <Text color="black" fontSize="$xs" fontFamily="Horizon">
                    {text}
                </Text>
                <Text
                    color={flashBlue}
                    fontSize="$2xs"
                    fontFamily="Horizon"
                    marginTop="-$1"
                >
                    {energy} KWH
                </Text>
            </VStack>
        </HStack>
    );
};

export const PowerTrain = ({ text }: SingleProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <ChassisLogo height="32" width="32" fill="black" />
            <VStack w="$64">
                <Text color="black" fontSize="$xs" fontFamily="Horizon">
                    {text}
                </Text>
                <Text
                    color={flashBlue}
                    fontSize="$2xs"
                    fontFamily="Horizon"
                    marginTop="-$1"
                >
                    POWERTRAIN
                </Text>
            </VStack>
        </HStack>
    );
};

export const Chassis = ({ text }: SingleProps) => {
    return (
        <HStack alignItems="center" space="xl">
            <ChassisLogo height="32" width="32" fill="white" />
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
            <BatteryLogo height="32" width="32" fill="white" />
            <Text color="white" fontSize="$xs" fontFamily="Horizon" w="$56">
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
        <Text w={145} fontSize={12} opacity={0.8} fontFamily="Horizon">
            {children}
        </Text>
    );
};

export const GT3RoadcarText = ({ children }: GT3RoadcarProps) => {
    return (
        <Text w="$32" fontSize={10} textAlign="right" fontFamily="Horizon">
            {children}
        </Text>
    );
};

interface DriversProps {
    drivers: string[];
    headingColor: string;
    textColor: string;
}

export const Drivers = ({ drivers, headingColor, textColor }: DriversProps) => {
    return (
        <VStack alignItems="center" space="xl">
            <Text color={headingColor} fontSize="$sm" fontFamily="Horizon">
                Drivers
            </Text>
            <HStack mt="-$5" width="$full" space="4xl">
                {drivers.map((driver, index) => (
                    <VStack key={index} alignItems="center">
                        <Text
                            textAlign="center"
                            key={`firstPart-${index}`}
                            color={textColor}
                            fontSize="$xs"
                            fontFamily="Horizon"
                            w="$40"
                        >
                            {driver.split(' ')[0]}
                        </Text>
                        {driver.split(' ').length > 1 && (
                            <Text
                                textAlign="center"
                                key={`secondPart-${index}`}
                                color={textColor}
                                fontSize="$xs"
                                fontFamily="Horizon"
                                w="$40"
                            >
                                {driver.split(' ').slice(1).join(' ')}
                            </Text>
                        )}
                    </VStack>
                ))}
            </HStack>
        </VStack>
    );
};
