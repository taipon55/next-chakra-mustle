import {
  Box,
  Button,
  Container,
  Input,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const Menu = () => {
  return (
    <>
      <Container maxW="1200px">
        <Text>トレーニング内容</Text>
        <Select textAlign="center" w="40" size="lg" placeholder="メニュ一覧">
          <option value="option1">胸トレ</option>
          <option value="option2">肩トレ</option>
          <option value="option3">腕トレ</option>
          <option value="option4">背中トレ</option>
          <option value="option5">脚トレ</option>
        </Select>
        <TableContainer>
          <Table w="70%" size="sm">
            <Thead>
              <Tr>
                <Th>メニュー</Th>
                <Th>重量</Th>
                <Th>回数</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Input />
                </Td>
                <Td>
                  <Input />
                </Td>
                <Td>
                  <Input />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Button ml="80%" colorScheme="red">
            記録する
          </Button>
        </Box>
      </Container>
    </>
  );
};
