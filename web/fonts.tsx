import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'Horizon';
        font-style: normal;
        font-display: swap;
        src: url('/motorsports-app/fonts/horizon.otf') format('otf');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
    />
);
