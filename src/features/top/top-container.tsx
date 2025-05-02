import { Box, Text } from '@chakra-ui/react';
import { useTop } from './model/hooks/use-top';
import { Top } from './ui';

export const TopContainer = () => {
  const { data: worksData, loading, error } = useTop();

  if (loading) return <Box w={'100vw'} h={'100vh'} />;
  if (error) return <Text>Error: {error.message}</Text>;
  if (!worksData) return <Text>データの取得ができませんでした。</Text>;

  return <Top worksData={worksData} />;
};
