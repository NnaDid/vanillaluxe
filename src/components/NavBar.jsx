import { Box, Flex, Link, Spacer, IconButton, VStack, HStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
import Logo from '../assets/logo2.png';
import { FaHamburger } from "react-icons/fa";

function Navbar() {
  // Manage menu open/close state manually
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log("Menu toggled, current state:", !isOpen); // Debugging
  };

  return (
    <>
      {/* Fixed Navbar */}
      <Box 
        bg="#132a38" 
        px={4} 
        py={2} 
        position="fixed" 
        top="0" 
        left="0" 
        right="0" 
        zIndex="1000"
        boxShadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
          {/* Logo */}
          <Link as={RouterLink} to="/">
            <Image src={Logo} alt="Logo" width={200} borderRadius="4px" />
          </Link>

          <Spacer />

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: 'underline' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="white" _hover={{ textDecoration: 'underline' }}>
              About
            </Link>
            <Link as={RouterLink} to="/services" color="white" _hover={{ textDecoration: 'underline' }}>
              Services
            </Link>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'block', md: 'none' }}
            aria-label="Toggle menu"
            icon={isOpen ? <BiX /> : <FaHamburger />}
            colorScheme="teal.900"
            bg={"teal.400"}
            onClick={toggleMenu} // Using useState toggle function
          />
        </Flex>
      </Box>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          position="fixed"
          top="60px"
          left="0"
          right="0"
          bg="#132a38"
          py={4}
          spacing={4}
          zIndex="999"
          boxShadow="md"
        >
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: 'underline' }} onClick={toggleMenu}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" _hover={{ textDecoration: 'underline' }} onClick={toggleMenu}>
            About
          </Link>
          <Link as={RouterLink} to="/services" color="white" _hover={{ textDecoration: 'underline' }} onClick={toggleMenu}>
            Services
          </Link>
        </VStack>
      )}

      {/* Push page content down so it doesn't hide under fixed navbar */}
      <Box mt="60px"></Box>
    </>
  );
}

export default Navbar;
