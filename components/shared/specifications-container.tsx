import { VStack } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { ImageBackground } from 'react-native';

import { darkBackground, darkBlue } from '../theme/colors';

interface SpecificationsContainerProps {
    children: ReactElement;
    tintColor: string;
    background: string;
}

export const SpecificationsContainer = ({
    children,
    tintColor,
    background
}: SpecificationsContainerProps) => {
    return (
        <VStack
            rounded="$2xl"
            backgroundColor={background}
            h="$full"
            marginTop="-$16"
        >
            <ImageBackground
                tintColor={tintColor}
                imageStyle={{
                    opacity: 0.04,
                    position: 'absolute',
                    width: '100%',
                    height: '90%',
                    top: -180
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
