import { ChevronRightIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  text: string;
};

export const TextArrowContainer: FC<Props> = ({ text }) => {
  return (
    <HStack
      alignItems="center"
      _hover={{
        '& > svg': {
          transform: 'translateX(5px)',
          transition: 'transform 0.2s',
        },
      }}
    >
      <Text>{text}</Text>
      <ChevronRightIcon boxSize={6} />
    </HStack>
  );
};
