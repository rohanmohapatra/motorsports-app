import { Image, Text, View } from '@gluestack-ui/themed';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useState } from 'react';

import { version } from '../../package.json';
import { darkBackground } from '../theme/colors';

// TODO: Make this DRY, too many same kind components
export const DrawerContent = (props: DrawerContentComponentProps) => {
    const { navigation } = props;
    const initialDrawerConfig = {
        home: false,
        f1: false,
        hyper: false,
        gt3: false,
        fe: false
    };
    const [config, setConfig] = useState({
        ...initialDrawerConfig,
        home: true
    });

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View width="$full" p="$3">
                <Image
                    source={require('../../assets/common/triangle.png')}
                    width={64}
                    height={64}
                    pb="$5"
                    tintColor={darkBackground}
                    alt="Logo"
                    resizeMode="contain"
                />
            </View>

            <View>
                <DrawerItem
                    label="Home"
                    onPress={() => {
                        navigation.navigate('index');
                        setConfig({ ...initialDrawerConfig, home: true });
                    }}
                    focused={config.home}
                    labelStyle={{
                        fontFamily: 'Horizon',
                        color: darkBackground
                    }}
                />
                <DrawerItem
                    label="Explore F1 Cars"
                    onPress={() => {
                        navigation.navigate('f1/[id]', {
                            id: 'envision-racing'
                        });
                        setConfig({ ...initialDrawerConfig, f1: true });
                    }}
                    focused={config.f1}
                    labelStyle={{
                        fontFamily: 'Horizon',
                        color: darkBackground
                    }}
                />
                <DrawerItem
                    label="Explore Hypercars"
                    onPress={() => {
                        navigation.navigate('hypercar/index');
                        setConfig({ ...initialDrawerConfig, hyper: true });
                    }}
                    focused={config.hyper}
                    labelStyle={{
                        fontFamily: 'Horizon',
                        color: darkBackground
                        // fontSize: 12
                    }}
                />
                <DrawerItem
                    label="Explore GT3 Cars"
                    onPress={() => {
                        navigation.navigate('gt3/index');
                        setConfig({ ...initialDrawerConfig, gt3: true });
                    }}
                    focused={config.gt3}
                    labelStyle={{
                        fontFamily: 'Horizon',
                        color: darkBackground
                    }}
                />
                <DrawerItem
                    label="Explore FE Cars"
                    onPress={() => {
                        navigation.navigate('formulae/[id]', {
                            id: 'envision-racing'
                        });
                        setConfig({ ...initialDrawerConfig, fe: true });
                    }}
                    focused={config.fe}
                    labelStyle={{
                        fontFamily: 'Horizon',
                        color: darkBackground
                    }}
                />
            </View>
            <Text
                fontFamily="Horizon"
                color={darkBackground}
                position="absolute"
                bottom={30}
                left={25}
            >
                v{version}
            </Text>
        </DrawerContentScrollView>
    );
};
