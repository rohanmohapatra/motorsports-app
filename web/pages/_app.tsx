import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Fonts } from '../fonts';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
};

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: '#222222'
            }
        }
    },
    fonts: {
        heading: 'Horizon'
    },
    colors: {
        neonGreen: { 500: '#D0FF3C' }
    }
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
