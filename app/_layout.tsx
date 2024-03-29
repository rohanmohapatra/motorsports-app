import {
    GluestackUIProvider,
    Icon,
    Pressable,
    MenuIcon
} from '@gluestack-ui/themed';
import { SplashScreen } from 'expo-router';
import Drawer from 'expo-router/drawer';

import { DrawerContent } from '../components/drawer/DrawerContent';
import { DrawerContextProvider } from '../components/drawer/drawer-context';
import { neonGreen } from '../components/theme/colors';
import { config } from '../gluestack.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    return (
        <GluestackUIProvider colorMode="dark" config={config}>
            <DrawerContextProvider>
                <Drawer
                    screenOptions={({ navigation }) => ({
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeft: () => (
                            <Pressable
                                onPress={() => navigation.toggleDrawer()}
                            >
                                <Icon
                                    as={MenuIcon}
                                    m="$4"
                                    w={40}
                                    h={40}
                                    softShadow="4"
                                    color="$white"
                                />
                            </Pressable>
                        ),
                        drawerStyle: { backgroundColor: neonGreen, width: 350 }
                    })}
                    drawerContent={DrawerContent}
                />
            </DrawerContextProvider>
        </GluestackUIProvider>
    );
}
