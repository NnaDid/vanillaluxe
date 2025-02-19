import { Box, Heading, Text, Button, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeroImage from '../assets/vanillaFarm.jpg'

function HeroSection() {
  return (
    <Box
      position="relative"
      minH="70vh"
      bgImage={`url(${HeroImage})`}
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.4)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <VStack
          color="white"
          textAlign="center"
          spacing={6}
          maxW="md"
          mx="auto"
        >
          <Heading fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })} fontWeight="bold" lineHeight={1}>
             Elevating Taste, Honoring Nature
          </Heading>
          <Text fontSize={useBreakpointValue({ base: 'md', md: '2xl' })} lineHeight={0.97}>
             Luxury meets sustainability. We source the finest vanilla through ethical, organic, and fair-trade practices—ensuring rich flavor while honoring farmers and the environment. Indulge in a taste that’s both exquisite and responsible
          </Text>
          <Link to="/about">
            <Button colorScheme="teal" size="lg" _hover={{ bg: 'teal.600' }}>
              Learn More
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
}

export default HeroSection;
