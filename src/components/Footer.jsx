import { Box, HStack, Image, Text, Link, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <Box bg="#132a38" color="white" py={6} px={8}>
      <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        <Image src={Logo} alt="Logo" width={90} borderRadius="4px" />
        <Spacer />
        <HStack spacing={8}>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "underline" }} color="white">About</Link>
          <Link as={RouterLink} to="/services" _hover={{ textDecoration: "underline" }} color="white">Services</Link>
        </HStack>

      </Flex>
      <Text mt={4} textAlign="center">&copy; {new Date().getFullYear()} Vanilla Luxe. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
