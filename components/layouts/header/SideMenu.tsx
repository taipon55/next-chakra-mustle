import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

export const SlideMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="yellow" onClick={onOpen}>
        open
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text>a</Text>
            <DrawerBody>
              <p>記録入力</p>
            </DrawerBody>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};
