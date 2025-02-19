import { Box, Heading, Text, VStack, Image, Container, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bg1 from "./assets/vanillaFarm.jpg";
import bg2 from "./assets/vanillaFresh.png";
import Navbar from "./components/NavBar";

const About = () => {
    const backgrounds = [bg1, bg2];
    const [bgIndex, setBgIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
             <Navbar />
             <Box position="relative" minH="100vh">
                <motion.div
                key={bgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                style={{
                    backgroundImage: `url(${backgrounds[bgIndex]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
                />
                <Container maxW="container.lg" py={16} color="white">
                <VStack spacing={6} textAlign="left" bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="md">
                    <Heading fontSize={{ base: "2xl", md: "4xl" }}>Vanilla Luxe: Where Luxury Meets Nature</Heading>
                    <Text>
                    At Vanilla Luxe, we believe that luxury is more than just a taste or fragrance—it is a philosophy that embraces quality, sustainability, and ethical sourcing. As a premier vanilla trader and distributor, we are dedicated to ensuring that every vanilla pod we source meets the highest standards of excellence while maintaining a deep respect for the environment and the farmers who cultivate it.
                    </Text>
                    <Heading fontSize={{ base: "xl", md: "2xl" }}>Commitment to Ethical & Sustainable Sourcing</Heading>
                    <Text>
                    We partner with farms that prioritize organic practices, fair trade, and environmentally conscious cultivation methods. This commitment ensures that our vanilla is not only a luxury for the palate but also a product of responsible and sustainable farming. By fostering strong relationships with farmers, we support fair wages, eco-friendly harvesting techniques, and the preservation of biodiversity.
                    </Text>
                    <Heading fontSize={{ base: "xl", md: "2xl" }}>From Farm to Luxury: A Seamless Journey</Heading>
                    <Text>
                    Vanilla Luxe takes pride in delivering a seamless journey from farm to table. Every vanilla pod is carefully handled to maintain its rich flavor and premium quality. Whether destined for fine-dining chefs, manufacturers of premium food products, or luxury perfume companies, our vanilla embodies both the richness of nature and the sophistication of high-end craftsmanship. Our meticulous distribution process guarantees that every client receives vanilla that meets the highest standards in taste, aroma, and sustainability.
                    </Text>
                    <Heading fontSize={{ base: "xl", md: "2xl" }}>A Trusted Partner in Excellence</Heading>
                    <Text>
                    "Where Luxury Meets Nature" is more than just our slogan—it represents our dedication to building lasting relationships with our clients by offering exclusive, high-end vanilla products. We are a trusted partner for businesses that demand the finest ingredients, providing exceptional service tailored to their unique needs. Our vanilla is not only known for its unparalleled quality but also for the personalized, premium experience we provide to each customer.
                    </Text>
                    <Text>
                    At Vanilla Luxe, we ensure that every product exudes excellence, sustainability, and the essence of true luxury.
                    </Text>
                    <Button as={Link} to="/" colorScheme="teal" size="lg" mt={4}>Back to Home</Button>
                </VStack>
                </Container>
            </Box>
        </>

    );
};

export default About;
