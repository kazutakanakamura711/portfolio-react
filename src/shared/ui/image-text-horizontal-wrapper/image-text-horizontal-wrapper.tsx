import { Box, Stack } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type Props = {
  reverse?: boolean;
  children: [ReactElement, ReactElement]; // 子コンポーネントが2つであることを要求
};

export const ImageTextHorizontalContainer: FC<Props> = ({
  reverse,
  children,
}) => {
  return (
    <Stack
      spacing={4}
      mb={8}
      direction={{
        base: 'column-reverse',
        md: reverse ? 'row-reverse' : 'row',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Box flex={1}>{children[0]}</Box>
      <Box flex={1}>{children[1]}</Box>
    </Stack>
  );
};
