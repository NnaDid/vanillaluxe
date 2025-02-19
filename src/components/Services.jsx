import { Box, Heading, Text, VStack, SimpleGrid, Image, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import service1 from "../assets/vanilla1.png";
import service2 from "../assets/vanilla2.png";
import service3 from "../assets/vanilla3.png";

const services = [
  {
    title: "Premium Vanilla Sourcing",
    description: "We source the finest vanilla beans from sustainable farms, ensuring top-tier quality and ethical trade practices.",
    image: service1,
  },
  {
    title: "Wholesale Distribution",
    description: "Supplying high-end vanilla products to chefs, manufacturers, and luxury brands worldwide with seamless logistics.",
    image: service2,
  },
  {
    title: "Custom Vanilla Solutions",
    description: "Tailored vanilla solutions for businesses, including custom blends and private-label packaging.",
    image: service3,
  },
];

const Services = () => {
  return (
    <Box bg="#f9f9f9" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center" mb={12}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>Our Services</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Experience the perfect blend of luxury, quality, and sustainability with our premium vanilla services.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <VStack
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                spacing={4}
              >
                <Image src={service.image} alt={service.title} borderRadius="md" w="100%" h={{ base: "200px", md: "250px" }} objectFit="cover" />
                <Heading fontSize={{ base: "lg", md: "xl" }}>{service.title}</Heading>
                <Text color="gray.600">{service.description}</Text>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
