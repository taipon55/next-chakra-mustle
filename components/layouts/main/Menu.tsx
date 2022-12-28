import {
  Box,
  Button,
  Container,
  Input,
  NumberInput,
  NumberInputField,
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
import { useState } from 'react';

export const Menu = () => {
  const [menu, setMenu] = useState('');
  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');

  const handleClick = () => {
    console.log({ menu, weight, count });
    setMenu('');
    setWeight('');
    setCount('');
  };

  return (
    <>
      <Container maxW="1200px">
        <Stack spacing={10}>
          <Box mt={10}>
            <Text>トレーニング内容</Text>
            <Select textAlign="center" w="40" size="lg" placeholder="メニュ一覧">
              <option value="option1">胸トレ</option>
              <option value="option2">肩トレ</option>
              <option value="option3">腕トレ</option>
              <option value="option4">背中トレ</option>
              <option value="option5">脚トレ</option>
            </Select>
          </Box>
          <Box>
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
                      <Input value={menu} onChange={(e) => setMenu(e.target.value)} />
                    </Td>
                    <Td>
                      <NumberInput>
                        <NumberInputField
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </NumberInput>
                    </Td>
                    <Td>
                      <NumberInput>
                        <NumberInputField
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                        />
                      </NumberInput>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            {/* isDisabled={!form.isValid()} */}
            <Button onClick={handleClick} ml="80%" colorScheme="red">
              記録する
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
