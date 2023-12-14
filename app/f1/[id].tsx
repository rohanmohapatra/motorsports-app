import { Box, Text } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';

const f1 = () => {
    const { id } = useGlobalSearchParams();

    return (
        <Box justifyContent="center" h="$full">
            <Text fontFamily="Horizon">{id}</Text>
        </Box>
    );
};

export default f1;
