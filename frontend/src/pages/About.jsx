import React from 'react';
import { VStack, Heading, Text, Box, SimpleGrid, Image, Stack, Divider, useBreakpointValue } from '@chakra-ui/react';

const About = () => {
  const columns = useBreakpointValue({ base: 1, md: 2 });
  const teamColumns = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  return (
    <VStack spacing={12} align="stretch" px={4} py={10} bg="gray.50">
      <Box textAlign="center" bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Heading as="h2" size="2xl" mb={4} color="blue.600">Tentang Kami</Heading>
        <Text fontSize="xl" color="gray.600">
          Kami adalah toko online terpercaya yang menyediakan berbagai produk berkualitas.
        </Text>
      </Box>

      <SimpleGrid columns={columns} spacing={10} mb={8}>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="blue.500">Visi Kami</Heading>
          <Text color="gray.700">
            Menjadi toko online terdepan yang menyediakan produk berkualitas tinggi dengan harga terjangkau,
            serta memberikan pengalaman berbelanja yang luar biasa bagi pelanggan kami.
          </Text>
        </Box>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
          <Heading as="h3" size="lg" mb={4} color="blue.500">Misi Kami</Heading>
          <Stack spacing={3} color="gray.700">
            <Text>1. Menyediakan produk berkualitas tinggi</Text>
            <Text>2. Memberikan layanan pelanggan yang unggul</Text>
            <Text>3. Terus berinovasi dalam pengalaman berbelanja online</Text>
            <Text>4. Mendukung produsen lokal dan praktik bisnis yang berkelanjutan</Text>
          </Stack>
        </Box>
      </SimpleGrid>

      <Box textAlign="center">
        <Heading as="h3" size="lg" mb={4} color="blue.500">Tim Kami</Heading>
        <SimpleGrid columns={teamColumns} spacing={6}>
          <TeamMember name="John Doe" position="CEO" />
          <TeamMember name="Jane Smith" position="CTO" />
          <TeamMember name="Mike Johnson" position="Marketing Manager" />
          <TeamMember name="Sarah Lee" position="Customer Service Lead" />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

const TeamMember = ({ name, position }) => {
  return (
    <VStack spacing={4} align="center" bg="white" p={4} borderRadius="md" boxShadow="md">
      <Image
        borderRadius="full"
        boxSize="150px"
        src={`https://via.placeholder.com/150?text=${name.charAt(0)}`}
        alt={name}
      />
      <Text fontWeight="bold" fontSize="lg" color="blue.600">{name}</Text>
      <Text color="gray.500">{position}</Text>
    </VStack>
  );
};

export default About;
