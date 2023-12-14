import { Box, Text, Image, View } from '@gluestack-ui/themed';
import { useGlobalSearchParams } from 'expo-router';

const f1 = () => {
    const { id } = useGlobalSearchParams();
    const data = {
        // img: merc,
        name: 'Mercedes',
        model: 'W13',
        specifications: [
            {
                engine: 'Mercedes-AMG F1 M14 E Performance',
                engSpec: '1.6 L V6 Turbo Charged',
                transmission: '8-Speed Hydraulics',
                hpower: 1070,
                drivers: ['Lewis Hamilton', 'George Russel']
            }
        ]
    };
    return (
        <>
            <Box h="$full" backgroundColor="$black">
                <Image
                    // style={{ alignSelf: 'flex-end' }}
                    size="full"
                    source={require('../../assets/f1/formula1-mercedes.jpeg')}
                    height={300}
                />
                <Text fontFamily="Horizon">{id}</Text>
            </Box>
        </>
    );
};

export default f1;
