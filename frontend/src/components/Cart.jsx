import React from 'react'; 
import { useCart } from '../context/CartContext';
import { Box, VStack, Heading, Text, Button, Divider, Flex, IconButton, Grid, Image } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} bg="white" shadow="md">
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg" textAlign="center">Keranjang Belanja</Heading>
        <Divider />
        {cart.length === 0 ? (
          <Text textAlign="center">Keranjang Anda kosong.</Text>
        ) : (
          <>
            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
              {cart.map((item) => (
                <Flex key={item.id} direction="column" borderWidth={1} borderRadius="md" p={4} bg="gray.50" shadow="sm" align="center">
                  <Image
                    borderRadius="md"
                    boxSize="150px"
                    src={item.image || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    mb={3}
                  />
                  <Box textAlign="center">
                    <Text fontWeight="bold" mb={1}>{item.name}</Text>
                    <Text color="gray.600">Rp{item.price.toLocaleString()}</Text>
                  </Box>
                  <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Hapus item"
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    mt={2}
                    _hover={{ bg: 'red.100' }}
                  />
                </Flex>
              ))}
            </Grid>
            <Divider />
            <Flex justify="space-between" fontWeight="bold" mt={4}>
              <Text>Total:</Text>
              <Text>Rp{total.toLocaleString()}</Text>
            </Flex>
            <Button colorScheme="green" size="lg" width="full" mt={4}>
              Lanjutkan ke Pembayaran
            </Button>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Cart;
