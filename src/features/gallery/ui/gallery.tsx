import { Box } from '@chakra-ui/react';
import { Title } from '@/shared/ui/title/title';
import { SkeletonImageWrapper } from '@/shared/ui/skeleton-image-wrapper';
import { galleryData } from '@/shared/lib/constants';

export const Gallery = () => {
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
          <SkeletonImageWrapper
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
