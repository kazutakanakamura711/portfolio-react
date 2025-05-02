import {
  Box,
  Flex,
  IconButton,
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
  Heading,
  Img,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FC, RefObject } from 'react';
import { publicRoutes } from '@/routes/publicRoutes';
import logo from '@/assets/images/logo.svg';
import { NavigationLinks } from './navigation-links';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement>;
  handleNavigation: (path: string) => void;
};

export const Header: FC<Props> = ({
  isOpen,
  onOpen,
  onClose,
  btnRef,
  handleNavigation,
}) => {
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
        justify="space-between"
        alignItems="center"
        display={{ base: 'none', md: 'flex' }}
      >
        <HStack spacing={2} align="center">
          <Box w={10}>
            <Img src={logo} />
          </Box>
          <Link
            onClick={() => handleNavigation('/')}
            textDecoration="none"
            color="black"
            fontWeight="bold"
            fontSize="lg"
            textShadow="1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white"
            _hover={{ textDecoration: 'none' }}
          >
            Interact Infinity
          </Link>
        </HStack>

        <NavigationLinks onNavigate={handleNavigation} />
      </Flex>

      {/* Mobile Hamburger Menu */}
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: 'flex', md: 'none' }}
      >
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
        <Heading as="h1" size="lg" color="black">
          <HStack spacing={2} align="center">
            <Box w={10}>
              <Img src={logo} />
            </Box>
            <Link
              onClick={() => handleNavigation('/')}
              textDecoration="none"
              color="black"
              textShadow="1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white"
              _hover={{ textDecoration: 'none' }}
            >
              Interact Infinity
            </Link>
          </HStack>
        </Heading>

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
