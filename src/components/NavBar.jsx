import { 
  Box, Flex, Link, Spacer, Button, useDisclosure, VStack, HStack, Image, IconButton 
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from '../assets/logo.png';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

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
            <Image src={Logo} alt="Logo" width={90} borderRadius="4px" />
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
            icon={isOpen ? "X" : "Open"}
            colorScheme="teal"
            onClick={onToggle}
          />
        </Flex>
      </Box>

      {/* Mobile Menu (Only visible when toggled) */}
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
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: 'underline' }} onClick={onToggle}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" _hover={{ textDecoration: 'underline' }} onClick={onToggle}>
            About
          </Link>
          <Link as={RouterLink} to="/services" color="white" _hover={{ textDecoration: 'underline' }} onClick={onToggle}>
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