import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import LuxuryImage from "../assets/powder.jpg"
const LuxuryExperience = () => {
    return (
      <Box py={16} px={6} maxW="1200px" mx="auto">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center" spacing={10}>
          <Box flex={1} pr={{ md: 8 }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <Heading fontSize={{ base: "2xl", md: "3xl" }}>Where Luxury Meets Nature</Heading>
              <Text mt={4}>
                At Vanilla Luxe, we are committed to providing exclusive, high-end vanilla products that build lasting relationships with our clients.
                Our dedication to premium service ensures businesses receive the finest ingredients, reflecting the sophistication and excellence of our vanilla.
              </Text>
            </motion.div>
          </Box>
          <Box flex={1} mt={{ base: 6, md: 0 }}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <Image src={LuxuryImage} alt="Luxury Vanilla" borderRadius="md" />
            </motion.div>
          </Box>
        </Flex>
      </Box>
    );
  };

  export default LuxuryExperience;