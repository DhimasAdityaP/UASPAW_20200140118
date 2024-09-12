import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link as RouterLink } from 'react-router-dom';
import { VStack, Heading, Button, SimpleGrid, Box, Text, Link, Skeleton, useToast } from '@chakra-ui/react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    sortProducts();
  }, [sortOrder]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: 'Product added',
      description: `${product.name} has been added to your cart.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  if (loading) {
    return (
      <VStack spacing={6} align="stretch">
        <Heading as="h2" size="xl">Daftar Produk</Heading>
        <Skeleton height="40px" width="200px" />
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {[...Array(6)].map((_, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={4} shadow="md">
              <VStack align="stretch" spacing={3}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="30px" />
                <Skeleton height="30px" />
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack spacing={6} align="stretch">
        <Heading as="h2" size="xl">Daftar Produk</Heading>
        <Box p={4} borderRadius="md" bg="red.100" color="red.700" textAlign="center">
          {error}
        </Box>
      </VStack>
    );
  }

  return (
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="xl">Daftar Produk</Heading>
      <Button onClick={toggleSortOrder} colorScheme="blue" mb={4}>
        Urutkan berdasarkan Harga ({sortOrder === 'asc' ? 'Rendah ke Tinggi' : 'Tinggi ke Rendah'})
      </Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4} shadow="md" bg="white" _hover={{ shadow: 'lg' }}>
            <VStack align="stretch" spacing={3}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text fontWeight="bold" color="blue.500">Harga: Rp{product.price.toLocaleString()}</Text>
              <Text noOfLines={3}>{product.description}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`}>
                <Button colorScheme="blue" variant="outline" width="full">Detail Produk</Button>
              </Link>
              <Button onClick={() => handleAddToCart(product)} colorScheme="green" width="full">
                Tambahkan ke Keranjang
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ProductList;
