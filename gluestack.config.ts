import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

export const config = createConfig({
    ...defaultConfig,
    tokens: {
        ...defaultConfig.tokens,
        fonts: {
            ...defaultConfig.tokens.fonts,
            body: 'sans-serif',
            heading: 'Horizon',
            headingOutline: 'Horizon-Outlined'
        },
        fontSizes: {
            ...defaultConfig.tokens.fontSizes
        }
    }
});
