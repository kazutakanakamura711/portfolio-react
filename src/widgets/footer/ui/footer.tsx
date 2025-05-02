import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type FooterProps = {
  year: number;
};

export const Footer: FC<FooterProps> = ({ year }) => {
  return (
    <Box as="footer" textAlign="center" py="1rem" bg="gray.50" color="black">
      © {year} KAZUTAKA NAKAMURA
    </Box>
  );
};
