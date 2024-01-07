import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Slot, SplashScreen } from 'expo-router';

import { config } from '../../gluestack.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    return (
        <GluestackUIProvider colorMode="dark" config={config}>
            <Slot />
        </GluestackUIProvider>
    );
}
