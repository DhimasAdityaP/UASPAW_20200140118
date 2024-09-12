import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Link, Container, VStack, HStack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Cart from './components/Cart';

function App() {
  const headerBg = useColorModeValue('teal.600', 'teal.800');
  const footerBg = useColorModeValue('teal.600', 'teal.800');
  const sidebarBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Router>
      <Flex minHeight="100vh" direction="column">
        {/* Header */}
        <Box as="header" bg={headerBg} color="white" p={4} boxShadow="md">
          <Container maxW="container.xl">
            <Flex alignItems="center" justifyContent="space-between">
              <HStack spacing={4}>
                <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                  <Heading as="h1" size="lg" color="white">
                    Toko Olshop Kami
                  </Heading>
                </Link>
              </HStack>
              <Flex as="nav" gap={4}>
                <Button as={RouterLink} to="/" variant="solid" colorScheme="teal">
                  Home
                </Button>
                <Button as={RouterLink} to="/products" variant="solid" colorScheme="teal">
                  Products
                </Button>
                <Button as={RouterLink} to="/about" variant="solid" colorScheme="teal">
                  About
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxW="container.xl" flex="1" py={8}>
          <Flex>
            {/* Sidebar */}
            <Box width="250px" p={4} bg={sidebarBg} boxShadow="md" borderRadius="md" mr={4}>
              <Heading size="md" mb={4}>Categories</Heading>
              <VStack spacing={2}>
                <Link as={RouterLink} to="/products" color="teal.600">All Products</Link>
                {/* Add more category links here */}
              </VStack>
            </Box>
            {/* Main Content Area */}
            <VStack flex={1} align="stretch" spacing={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </VStack>
            {/* Cart */}
            <Box width="300px" position="sticky" top="20px" alignSelf="flex-start">
              <Cart />
            </Box>
          </Flex>
        </Container>

        {/* Footer */}
        <Box as="footer" bg={footerBg} color="white" p={4} mt="auto" boxShadow="md">
          <Container maxW="container.xl" textAlign="center">
            <Text mb={2}>&copy; 2024 Toko Olshop Kami. All Rights Reserved.</Text>
            <Link as={RouterLink} to="/privacy" color="white" _hover={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </Container>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
