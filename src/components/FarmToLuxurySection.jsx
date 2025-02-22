import React from 'react'
import FarmImage from '../assets/pod2.jpg'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const FarmToLuxurySection = () => {
  return (
    <Box py={16} px={6} maxW="1200px" mx="auto">
    <Flex direction={{ base: "column", md: "row" }} alignItems="center" spacing={10}>
      <Box flex={1} pr={{ md: 8 }}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>From Farm to Luxury: A Journey of Excellence</Heading>
        <Text mt={4}>
          At Vanilla Luxe, every vanilla pod embarks on a carefully curated journey—from sustainable farms to fine-dining chefs, premium food manufacturers, and luxury perfumers. 
          We ensure each product reflects the richness of nature and the sophistication of true luxury.
        </Text>
      </Box>
      <Box flex={1} mt={{ base: 6, md: 0 }}>
        <Image src={FarmImage} alt="Vanilla Farm" borderRadius="md" />
      </Box>
    </Flex>
  </Box>
  )
}

export default FarmToLuxurySection