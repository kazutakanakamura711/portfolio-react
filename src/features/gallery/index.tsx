import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Title } from '../../components/elements/Title';
import { galleryData } from '../../config/constants';
import { SkeletonImageContainer } from '../../components/elements/SkeletonImageContainer';

export const Gallery: FC = () => {
  return (
    <Box textAlign="center" maxW={1280} mx="auto">
      <Title title="Gallery" />

      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // 768px以上では2列、以下では1列
        gap={12}
        maxW="100vw"
        overflow="hidden"
      >
        {galleryData.map((item, index) => (
          <SkeletonImageContainer
            key={index}
            src={item.src}
            alt={item.alt}
            aspectRatio={1}
          />
        ))}
      </Box>
    </Box>
  );
};
