import * as Font from 'expo-font';

const useCustomFonts = async () =>
    await Font.loadAsync({
        Horizon: require('../assets/fonts/horizon/horizon.otf'),
        'Horizon-Outlined': require('../assets/fonts/horizon/horizon_outlined.otf')
    });

export default useCustomFonts;
