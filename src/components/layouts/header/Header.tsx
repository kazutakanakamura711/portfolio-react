import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { publicRoutes } from '../../../routes/publicRoutes';

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    onClose();
    navigate(path);
  };

  const renderLinks = publicRoutes.map((link, index) => (
    <ListItem key={index} listStyleType="none">
      <Link
        onClick={() => handleNavigation(link.path)}
        textDecoration="none"
        color="black"
        textShadow="1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white"
        _hover={{ textDecoration: 'none' }}
      >
        {link.label}
      </Link>
    </ListItem>
  ));

  return (
    <Box
      as="header"
      bg="transparent"
      color="white"
      padding="1rem"
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(2px) hue-rotate(0deg)"
    >
      {/* Desktop Menu */}
      <Flex
        as="nav"
        justify="space-around"
        display={{ base: 'none', md: 'flex' }}
      >
        <UnorderedList
          display="flex"
          justifyContent="space-between"
          flex="1"
          maxW="80%"
          m={0}
          p={0}
          listStyleType="none"
        >
          {renderLinks}
        </UnorderedList>
      </Flex>

      {/* Mobile Hamburger Menu */}
      <Flex justify="space-between" display={{ base: 'flex', md: 'none' }}>
        <IconButton
          aria-label="Open Menu"
          icon={
            isOpen ? (
              <CloseIcon color="black" />
            ) : (
              <HamburgerIcon color="black" />
            )
          }
          ref={btnRef}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack as="nav" align="start" spacing={4}>
                <UnorderedList m={0} p={0} spacing={3}>
                  {renderLinks}
                </UnorderedList>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};
