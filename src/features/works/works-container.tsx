import { Box, Text } from '@chakra-ui/react';
import { useWorks } from './model/hooks/use-works';
import { Works } from './ui';

export const WorksContainer = () => {
  const { data: worksData, loading, error } = useWorks();

  if (loading) return <Box w={'100vw'} h={'100vh'} />;
  if (error) return <Text>Error: {error.message}</Text>;
  if (!worksData) return <Text>データの取得ができませんでした。</Text>;

  return <Works worksData={worksData} />;
};
