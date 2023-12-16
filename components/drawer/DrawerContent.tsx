import { Image } from '@gluestack-ui/themed';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useState } from 'react';

import { darkBackground } from '../theme/colors';

// TODO: Make this DRY, too many same kind components
export const DrawerContent = (props: DrawerContentComponentProps) => {
    const { navigation } = props;
    const initialDrawerConfig = {
        home: false,
        f1: false,
        hyper: false,
        gt3: false
    };
    const [config, setConfig] = useState({
        ...initialDrawerConfig,
        home: true
    });

    return (
        <DrawerContentScrollView>
            <Image
                source={require('../../assets/common/triangle.png')}
                size="sm"
                pb="$5"
                tintColor={darkBackground}
                alt="Logo"
            />

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
                    navigation.navigate('gt3/[id]', { id: 'mercedes-w13' });
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
                    navigation.navigate('index');
                    setConfig({ ...initialDrawerConfig, hyper: true });
                }}
                focused={config.hyper}
                labelStyle={{
                    fontFamily: 'Horizon',
                    color: darkBackground
                }}
            />
            <DrawerItem
                label="Explore GT3 Cars"
                onPress={() => {
                    navigation.navigate('gt3/[id]', { id: 'mclaren-720s' });
                    setConfig({ ...initialDrawerConfig, gt3: true });
                }}
                focused={config.gt3}
                labelStyle={{
                    fontFamily: 'Horizon',
                    color: darkBackground
                }}
            />
        </DrawerContentScrollView>
    );
};
