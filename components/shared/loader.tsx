import { Spinner, View } from '@gluestack-ui/themed';

import { darkBackground, neonGreenLight } from '../theme/colors';

export const Loader = () => {
    return (
        <View
            h="$full"
            w="$full"
            bg={darkBackground}
            justifyContent="center"
            alignItems="center"
        >
            <Spinner size="large" color={neonGreenLight} />
        </View>
    );
};
