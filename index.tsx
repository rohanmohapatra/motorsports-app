import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { ExpoRoot, SplashScreen } from 'expo-router';
import { RequireContext } from 'expo-router/build/types';
import { useCallback } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

// Must be exported or Fast Refresh won't update the context
export function App() {
    const [fontsLoaded, fontError] = useFonts({
        Horizon: require('./assets/fonts/horizon/horizon.otf'),
        'Horizon-Outlined': require('./assets/fonts/horizon/horizon_outlined.otf')
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) {
        return null;
    }
    const ctx = require.context('./app');
    return (
        <>
            <ExpoRoot context={ctx as RequireContext} />
            <View onLayout={onLayoutRootView} />
        </>
    );
}

registerRootComponent(App);
