import React from 'react'
import { motion } from "framer-motion";
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const CallToAction = () => {
  return (
    <Box py={16} textAlign="center" bg="orange.500" color="white">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Experience the Finest Vanilla – Ethically Sourced, Luxuriously Delivered.</Heading>
        <Text mt={4} maxW="600px" mx="auto">
          Indulge in premium quality vanilla sourced with care. Elevate your culinary and fragrance experiences today.
        </Text>
        <Button mt={6} colorScheme="yellow" size="lg">Explore Our Collection</Button>
      </motion.div>
    </Box>
  )
}

export default CallToAction