import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';

const horizon = localFont({
    src: '../public/fonts/horizon.otf',
    display: 'swap'
});

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
        heading: horizon.style.fontFamily
    },
    colors: {
        neonGreen: { 500: '#D0FF3C' }
    }
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
