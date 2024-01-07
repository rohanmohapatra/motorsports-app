import { VStack } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { ImageBackground } from 'react-native';

import {
    darkBackground,
    flashBlue,
    flashBlueLight,
    lightBackground
} from '../theme/colors';

interface SpecificationsContainerProps {
    children: ReactElement;
    theme?: 'light' | 'dark';
}

export const SpecificationsContainer = ({
    children,
    theme = 'dark'
}: SpecificationsContainerProps) => {
    const lightTheme = {
        bg: lightBackground,
        color: flashBlueLight,
        textColor: flashBlue,
        opacity: 0.12
    };

    return (
        <VStack
            rounded="$2xl"
            backgroundColor={theme === 'light' ? lightTheme.bg : darkBackground}
            h="$full"
            marginTop="-$16"
        >
            <ImageBackground
                imageStyle={{
                    opacity: theme === 'light' ? lightTheme.opacity : 0.04,
                    position: 'absolute',
                    width: '100%',
                    height: '90%',
                    top: -180,
                    ...(theme === 'light' && { tintColor: lightTheme.color })
                }}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}
                source={require('../../assets/common/triangle.png')}
                resizeMode="cover"
            >
                {children}
            </ImageBackground>
        </VStack>
    );
};
