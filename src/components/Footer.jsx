import { Box, HStack, Image, Text, Link, Flex, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Logo from '../assets/logo2.png';

const Footer = () => {
  return (
    <Box bg="#132a38" color="white" py={6} px={8}>
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto" flexWrap="wrap">
        {/* Logo */}
        <Image src={Logo} alt="Logo" width={200} borderRadius="4px" />

        <Spacer />

        {/* Navigation Links */}
        <HStack spacing={8}>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "underline" }} color="white">About</Link>
          <Link as={RouterLink} to="/services" _hover={{ textDecoration: "underline" }} color="white">Services</Link>
        </HStack>

        <Spacer />

        {/* Contact Info */}
        <VStack align="flex-end" spacing={1}>
          {/* <Text fontSize="sm">📞 +1 (123) 456-7890</Text> */}
          <Text fontSize="sm">
            {/* ✉️ <Link href="mailto:contact@vanillaluxe.com" color="yellow.300">contact@vanillaluxe.com</Link> <br /> */}
            ✉️ <Link href="mailto:vanillaluxe6@gmail.com" color="yellow.300">vanillaluxe6@gmail.com</Link>
          
          </Text>
        </VStack>
      </Flex>

      <Text mt={4} textAlign="center">&copy; {new Date().getFullYear()} Vanilla Luxe. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
