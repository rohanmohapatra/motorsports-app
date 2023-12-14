import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';
import { config } from '../gluestack.config';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    return (
        <GluestackUIProvider colorMode="dark" config={config}>
            <Slot />
        </GluestackUIProvider>
    );
}
