import {
  Box,
  VStack,
  Text,
  Button,
  ButtonText,
  ButtonGroup,
  Image,
} from "@gluestack-ui/themed";
import { darkBackground, neonGreen } from "../theme/colors";
import { Header } from "./Header";
import Logo from "./logo.svg";

export const Home = () => {
  return (
    <Box h="$full" justifyContent="center" bgColor={darkBackground}>
      <VStack space="xs" reversed={false} p="$4">
        <Box
          transform={[
            { rotate: "40deg" },
            { translateX: -90 },
            { translateY: -170 },
          ]}
        >
          <Logo height="450" />
        </Box>
        <Box mt="-$24">
          <Header />
        </Box>
        <VStack space="md" width="$80" pt="$9">
          <Button rounded="$full" bgColor={neonGreen}>
            <ButtonText fontFamily="Horizon" color={darkBackground}>
              Explore F1 Cars
            </ButtonText>
          </Button>
          <Button rounded="$full" bgColor={neonGreen}>
            <ButtonText fontFamily="Horizon" color={darkBackground}>
              Explore Hypercars
            </ButtonText>
          </Button>
          <Button rounded="$full" bgColor={neonGreen}>
            <ButtonText fontFamily="Horizon" color={darkBackground}>
              Explore GT3 Cars
            </ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
