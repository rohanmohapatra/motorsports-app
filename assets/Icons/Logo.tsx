import React from 'react';
import { Svg, Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const YourSvgComponent = () => {
    return (
        <Svg width="188" height="31" viewBox="0 0 188 31" fill="none">
            <Rect
                y="1.40527"
                width="27.9999"
                height="27.1895"
                rx="2.79998"
                fill="url(#paint0_linear_10988_36724)"
            />
            <Path
                d="M7 13.5614L13.9999 8.40527V10.8386L7 15.9947V13.5614Z"
                fill="white"
            />
            <Path
                d="M21 13.5615L14.0001 8.40533V10.8386L21 15.9948V13.5615Z"
                fill="white"
            />
            <Path
                d="M7 19.1614L13.9999 14.0052V16.4386L7 21.5947V19.1614Z"
                fill="white"
            />
            <Path
                d="M20.999 19.1615L13.9992 14.0054V16.4387L20.999 21.5948V19.1615Z"
                fill="white"
            />
            <Path
                d="M47.3392 30.28C46.3952 30.28 45.5232 30.128 44.7232 29.824C43.9232 29.52 43.2352 29.096 42.6592 28.552C42.0832 28.024 41.6512 27.4 41.3632 26.68L43.8592 25.648C44.0832 26.256 44.4912 26.76 45.0832 27.16C45.6912 27.56 46.4352 27.76 47.3152 27.76C48.0032 27.76 48.6192 27.624 49.1632 27.352C49.7072 27.096 50.1392 26.712 50.4592 26.2C50.7792 25.704 50.9392 25.104 50.9392 24.4V21.472L51.4192 22.024C50.9712 22.856 50.3472 23.488 49.5472 23.92C48.7632 24.352 47.8752 24.568 46.8832 24.568C45.6832 24.568 44.6032 24.288 43.6432 23.728C42.6832 23.168 41.9232 22.4 41.3632 21.424C40.8192 20.448 40.5472 19.352 40.5472 18.136C40.5472 16.904 40.8192 15.808 41.3632 14.848C41.9232 13.888 42.6752 13.128 43.6192 12.568C44.5632 12.008 45.6432 11.728 46.8592 11.728C47.8512 11.728 48.7312 11.944 49.4992 12.376C50.2832 12.792 50.9232 13.4 51.4192 14.2L51.0592 14.872V12.016H53.6272V24.4C53.6272 25.52 53.3552 26.52 52.8112 27.4C52.2832 28.296 51.5472 29 50.6032 29.512C49.6592 30.024 48.5712 30.28 47.3392 30.28ZM47.1952 22.048C47.9152 22.048 48.5552 21.88 49.1152 21.544C49.6752 21.192 50.1152 20.728 50.4352 20.152C50.7712 19.56 50.9392 18.896 50.9392 18.16C50.9392 17.424 50.7712 16.76 50.4352 16.168C50.0992 15.576 49.6512 15.112 49.0912 14.776C48.5312 14.424 47.8992 14.248 47.1952 14.248C46.4592 14.248 45.8032 14.424 45.2272 14.776C44.6512 15.112 44.1952 15.576 43.8592 16.168C43.5392 16.744 43.3792 17.408 43.3792 18.16C43.3792 18.88 43.5392 19.536 43.8592 20.128C44.1952 20.72 44.6512 21.192 45.2272 21.544C45.8032 21.88 46.4592 22.048 47.1952 22.048ZM56.8018 25V6.832H59.5138V25H56.8018ZM67.3166 25.288C66.3406 25.288 65.4846 25.072 64.7486 24.64C64.0126 24.192 63.4366 23.576 63.0206 22.792C62.6206 21.992 62.4206 21.072 62.4206 20.032V12.016H65.1326V19.792C65.1326 20.384 65.2526 20.904 65.4926 21.352C65.7326 21.8 66.0686 22.152 66.5006 22.408C66.9326 22.648 67.4286 22.768 67.9886 22.768C68.5646 22.768 69.0686 22.64 69.5006 22.384C69.9326 22.128 70.2686 21.768 70.5086 21.304C70.7646 20.84 70.8926 20.296 70.8926 19.672V12.016H73.5806V25H71.0126V22.456L71.3006 22.792C70.9966 23.592 70.4926 24.208 69.7886 24.64C69.0846 25.072 68.2606 25.288 67.3166 25.288ZM82.8431 25.288C81.5471 25.288 80.3951 24.992 79.3871 24.4C78.3951 23.792 77.6191 22.976 77.0591 21.952C76.4991 20.912 76.2191 19.752 76.2191 18.472C76.2191 17.16 76.4991 16 77.0591 14.992C77.6351 13.984 78.4031 13.192 79.3631 12.616C80.3231 12.024 81.4111 11.728 82.6271 11.728C83.6031 11.728 84.4751 11.896 85.2431 12.232C86.0111 12.568 86.6591 13.032 87.1871 13.624C87.7151 14.2 88.1151 14.864 88.3871 15.616C88.6751 16.368 88.8191 17.168 88.8191 18.016C88.8191 18.224 88.8111 18.44 88.7951 18.664C88.7791 18.888 88.7471 19.096 88.6991 19.288H78.3551V17.128H87.1631L85.8671 18.112C86.0271 17.328 85.9711 16.632 85.6991 16.024C85.4431 15.4 85.0431 14.912 84.4991 14.56C83.9711 14.192 83.3471 14.008 82.6271 14.008C81.9071 14.008 81.2671 14.192 80.7071 14.56C80.1471 14.912 79.7151 15.424 79.4111 16.096C79.1071 16.752 78.9871 17.552 79.0511 18.496C78.9711 19.376 79.0911 20.144 79.4111 20.8C79.7471 21.456 80.2111 21.968 80.8031 22.336C81.4111 22.704 82.0991 22.888 82.8671 22.888C83.6511 22.888 84.3151 22.712 84.8591 22.36C85.4191 22.008 85.8591 21.552 86.1791 20.992L88.3871 22.072C88.1311 22.68 87.7311 23.232 87.1871 23.728C86.6591 24.208 86.0191 24.592 85.2671 24.88C84.5311 25.152 83.7231 25.288 82.8431 25.288ZM96.2658 25.288C94.9378 25.288 93.7698 24.96 92.7618 24.304C91.7698 23.648 91.0738 22.768 90.6738 21.664L92.7618 20.68C93.1138 21.416 93.5938 22 94.2018 22.432C94.8258 22.864 95.5138 23.08 96.2658 23.08C96.9058 23.08 97.4258 22.936 97.8258 22.648C98.2258 22.36 98.4258 21.968 98.4258 21.472C98.4258 21.152 98.3378 20.896 98.1618 20.704C97.9858 20.496 97.7618 20.328 97.4898 20.2C97.2338 20.072 96.9698 19.976 96.6978 19.912L94.6578 19.336C93.5378 19.016 92.6978 18.536 92.1378 17.896C91.5938 17.24 91.3218 16.48 91.3218 15.616C91.3218 14.832 91.5218 14.152 91.9218 13.576C92.3218 12.984 92.8738 12.528 93.5778 12.208C94.2818 11.888 95.0738 11.728 95.9538 11.728C97.1378 11.728 98.1938 12.024 99.1218 12.616C100.05 13.192 100.706 14 101.09 15.04L99.0018 16.024C98.7458 15.4 98.3378 14.904 97.7778 14.536C97.2338 14.168 96.6178 13.984 95.9298 13.984C95.3378 13.984 94.8658 14.128 94.5138 14.416C94.1618 14.688 93.9858 15.048 93.9858 15.496C93.9858 15.8 94.0658 16.056 94.2258 16.264C94.3858 16.456 94.5938 16.616 94.8498 16.744C95.1058 16.856 95.3698 16.952 95.6418 17.032L97.7538 17.656C98.8258 17.96 99.6498 18.44 100.226 19.096C100.802 19.736 101.09 20.504 101.09 21.4C101.09 22.168 100.882 22.848 100.466 23.44C100.066 24.016 99.5058 24.472 98.7858 24.808C98.0658 25.128 97.2258 25.288 96.2658 25.288ZM109.363 25.144C108.003 25.144 106.947 24.76 106.195 23.992C105.443 23.224 105.067 22.144 105.067 20.752V14.464H102.787V12.016H103.147C103.755 12.016 104.227 11.84 104.563 11.488C104.899 11.136 105.067 10.656 105.067 10.048V9.04H107.779V12.016H110.731V14.464H107.779V20.632C107.779 21.08 107.851 21.464 107.995 21.784C108.139 22.088 108.371 22.328 108.691 22.504C109.011 22.664 109.427 22.744 109.939 22.744C110.067 22.744 110.211 22.736 110.371 22.72C110.531 22.704 110.683 22.688 110.827 22.672V25C110.603 25.032 110.355 25.064 110.083 25.096C109.811 25.128 109.571 25.144 109.363 25.144ZM117.244 25.288C116.364 25.288 115.588 25.136 114.916 24.832C114.26 24.512 113.748 24.08 113.38 23.536C113.012 22.976 112.828 22.32 112.828 21.568C112.828 20.864 112.98 20.232 113.284 19.672C113.604 19.112 114.092 18.64 114.748 18.256C115.404 17.872 116.228 17.6 117.22 17.44L121.732 16.696V18.832L117.748 19.528C117.028 19.656 116.5 19.888 116.164 20.224C115.828 20.544 115.66 20.96 115.66 21.472C115.66 21.968 115.844 22.376 116.212 22.696C116.596 23 117.084 23.152 117.676 23.152C118.412 23.152 119.052 22.992 119.596 22.672C120.156 22.352 120.588 21.928 120.892 21.4C121.196 20.856 121.348 20.256 121.348 19.6V16.264C121.348 15.624 121.108 15.104 120.628 14.704C120.164 14.288 119.54 14.08 118.756 14.08C118.036 14.08 117.404 14.272 116.86 14.656C116.332 15.024 115.94 15.504 115.684 16.096L113.428 14.968C113.668 14.328 114.06 13.768 114.604 13.288C115.148 12.792 115.78 12.408 116.5 12.136C117.236 11.864 118.012 11.728 118.828 11.728C119.852 11.728 120.756 11.92 121.54 12.304C122.34 12.688 122.956 13.224 123.388 13.912C123.836 14.584 124.06 15.368 124.06 16.264V25H121.468V22.648L122.02 22.72C121.716 23.248 121.324 23.704 120.844 24.088C120.38 24.472 119.844 24.768 119.236 24.976C118.644 25.184 117.98 25.288 117.244 25.288ZM133.399 25.288C132.103 25.288 130.951 24.992 129.943 24.4C128.951 23.792 128.159 22.976 127.567 21.952C126.991 20.928 126.703 19.768 126.703 18.472C126.703 17.192 126.991 16.04 127.567 15.016C128.143 13.992 128.935 13.192 129.943 12.616C130.951 12.024 132.103 11.728 133.399 11.728C134.279 11.728 135.103 11.888 135.871 12.208C136.639 12.512 137.303 12.936 137.863 13.48C138.439 14.024 138.863 14.656 139.135 15.376L136.759 16.48C136.487 15.808 136.047 15.272 135.439 14.872C134.847 14.456 134.167 14.248 133.399 14.248C132.663 14.248 131.999 14.432 131.407 14.8C130.831 15.152 130.375 15.656 130.039 16.312C129.703 16.952 129.535 17.68 129.535 18.496C129.535 19.312 129.703 20.048 130.039 20.704C130.375 21.344 130.831 21.848 131.407 22.216C131.999 22.584 132.663 22.768 133.399 22.768C134.183 22.768 134.863 22.568 135.439 22.168C136.031 21.752 136.471 21.2 136.759 20.512L139.135 21.64C138.879 22.328 138.463 22.952 137.887 23.512C137.327 24.056 136.663 24.488 135.895 24.808C135.127 25.128 134.295 25.288 133.399 25.288ZM141.786 25V6.832H144.498V19L143.442 18.736L149.946 12.016H153.33L148.434 17.224L153.546 25H150.426L145.866 18.112L147.474 17.896L143.634 21.976L144.498 20.176V25H141.786ZM155.811 19.696V17.296H165.411V19.696H155.811ZM173.629 25.288C172.653 25.288 171.797 25.072 171.061 24.64C170.325 24.192 169.749 23.576 169.333 22.792C168.933 21.992 168.733 21.072 168.733 20.032V12.016H171.445V19.792C171.445 20.384 171.565 20.904 171.805 21.352C172.045 21.8 172.381 22.152 172.813 22.408C173.245 22.648 173.741 22.768 174.301 22.768C174.877 22.768 175.381 22.64 175.813 22.384C176.245 22.128 176.581 21.768 176.821 21.304C177.077 20.84 177.205 20.296 177.205 19.672V12.016H179.893V25H177.325V22.456L177.613 22.792C177.309 23.592 176.805 24.208 176.101 24.64C175.397 25.072 174.573 25.288 173.629 25.288ZM183.06 25V12.016H185.772V25H183.06ZM183.06 10.24V7.12H185.772V10.24H183.06Z"
                fill="white"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_10988_36724"
                    x1="14"
                    y1="1.40527"
                    x2="31.1111"
                    y2="30.6386"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stop-color="#4AA9FF" />
                    <Stop offset="1" stop-color="#004282" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default YourSvgComponent;
