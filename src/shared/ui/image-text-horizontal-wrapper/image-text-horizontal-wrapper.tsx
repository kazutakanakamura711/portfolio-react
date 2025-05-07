import { Box, Stack } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

export type ImageTextHorizontalWrapperProps = {
  children: [ReactElement, ReactElement]; // 子コンポーネントが2つであることを要求
  isReverse?: boolean;
};

export const ImageTextHorizontalWrapper: FC<
  ImageTextHorizontalWrapperProps
> = ({ children, isReverse }) => {
  return (
    <Stack
      spacing={4}
      mb={8}
      direction={{
        base: 'column-reverse',
        md: isReverse ? 'row-reverse' : 'row',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Box flex={1}>{children[0]}</Box>
      <Box flex={1}>{children[1]}</Box>
    </Stack>
  );
};
