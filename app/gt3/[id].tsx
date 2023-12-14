import { Box, Text } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';

const Gt3 = () => {
    const { id } = useGlobalSearchParams();

    return (
        <Box justifyContent="center" h="$full">
            <Text fontFamily="Horizon">{id}</Text>
        </Box>
    );
};

export default Gt3;
