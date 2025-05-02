import { FC } from 'react';
import { Header } from './ui';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const HeaderContainer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <Header
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      btnRef={btnRef}
      handleNavigation={handleNavigation}
    />
  );
};
