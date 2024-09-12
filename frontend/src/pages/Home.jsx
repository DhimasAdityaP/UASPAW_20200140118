import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { VStack, Heading, Text, Button, Box, SimpleGrid, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack spacing={12} align="stretch" px={4} py={10}>
      {/* Hero Section */}
      <Box 
        bgImage="')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        p={10}
        borderRadius="md"
        textAlign="center"
        mb={8}
      >
        <Heading as="h2" size="2xl" mb={4}>Selamat Datang di Olshop Kami</Heading>
        <Text fontSize="xl" mb={6}>Temukan produk berkualitas dengan harga terbaik!</Text>
        <Button as={RouterLink} to="/products" colorScheme="blue" size="lg" variant="solid">
          Lihat Produk Kami
        </Button>
      </Box>

      {/* Features Section */}
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Feature
          icon="🛒"
          title="Belanja Mudah"
          text="Nikmati pengalaman berbelanja yang mudah dan nyaman dari rumah Anda."
        />
        <Feature
          icon="🚚"
          title="Pengiriman Cepat"
          text="Kami menjamin pengiriman cepat ke seluruh wilayah Indonesia."
        />
        <Feature
          icon="💯"
          title="Kualitas Terjamin"
          text="Semua produk kami dijamin kualitasnya dan asli 100%."
        />
      </SimpleGrid>
    </VStack>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <VStack
      spacing={4}
      p={6}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      align="center"
      textAlign="center"
    >
      <Box fontSize="5xl" mb={4} color="blue.500">{icon}</Box>
      <Heading as="h3" size="lg" mb={2} color="blue.600">{title}</Heading>
      <Text color="gray.600">{text}</Text>
    </VStack>
  );
};

export default Home;
