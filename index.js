import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { ExpoRoot } from 'expo-router';
import { useState } from 'react';
import useCustomFonts from './hooks/useCustomFonts';

// Must be exported or Fast Refresh won't update the context
export function App() {
    const [isReady, setIsReady] = useState(false);

    const loadFonts = async () => {
        await useCustomFonts();
    };

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIsReady(true)}
                onError={() => {}}
            />
        );
    }
    const ctx = require.context('./app');
    return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
