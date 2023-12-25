import { VStack } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { ImageBackground } from 'react-native';

import { darkBackground } from '../theme/colors';

interface SpecificationsContainerProps {
    children: ReactElement;
}

export const SpecificationsContainer = ({
    children
}: SpecificationsContainerProps) => {
    return (
        <VStack
            rounded="$2xl"
            backgroundColor={darkBackground}
            h="$full"
            marginTop="-$16"
        >
            <ImageBackground
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
