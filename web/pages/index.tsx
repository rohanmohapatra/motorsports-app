import { Button, HStack, Heading, Stack, Image as Img } from '@chakra-ui/react';
import Image from 'next/image';
import { horizon } from '../font';

const Index = () => {
    return (
        <Stack
            justify="center"
            align="center"
            width="100vw"
            height="100vh"
            color="neonGreen.500"
            spacing={0}
            backgroundImage="/motorsports-app/background.png"
            backgroundPosition="center"
            backgroundSize="cover"
        >
            <Image
                src="/motorsports-app/triangle.svg"
                height={100}
                width={100}
                alt="Logo"
                style={{
                    paddingTop: '1rem'
                }}
            />
            <HStack
                w="100%"
                align="center"
                justify="center"
                alignSelf="flex-end"
            >
                <Stack>
                    <Stack width="100%" pt="6rem">
                        <Stack spacing={0}>
                            <Heading size="md">The</Heading>
                            <Heading size="2xl">Motor</Heading>
                        </Stack>
                        <Stack spacing={0} align="flex-end">
                            <Heading size="2xl">Sports</Heading>
                            <Heading size="md">App</Heading>
                        </Stack>
                    </Stack>

                    <Stack pt="7rem">
                        <Heading size="xs">Want to be a beta tester?</Heading>
                        <Button
                            rounded="full"
                            fontFamily={horizon.style.fontFamily}
                            bg="neonGreen.500"
                            color="#222222"
                            onClick={() => {
                                window.open(
                                    'https://github.com/rohanmohapatra/motorsports-app/releases/download/v0.0.1-beta/the-motorsports-app.apk',
                                    '_blank'
                                );
                            }}
                        >
                            Download APK Now
                        </Button>
                    </Stack>
                </Stack>
                <Img src="/motorsports-app/hero.png" width="25rem" />
            </HStack>
        </Stack>
    );
};

export default Index;
