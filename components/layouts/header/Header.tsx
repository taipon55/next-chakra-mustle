import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Menu } from './SideMenu';
export const Header = () => {
  return (
    <>
      <Box>
        <Container maxW="container" bg="black">
          <Flex h={20} justify="center" align="center">
            <Menu />
            <Text color="white" p="40%">
              {' '}
              筋トレメモ
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
