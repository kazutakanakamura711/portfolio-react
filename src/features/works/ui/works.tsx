import { Box, Link, Text, VStack } from '@chakra-ui/react';
import { SkeletonImageWrapper } from '@/shared/ui/skeleton-image-wrapper';
import { ImageTextHorizontalWrapper } from '@/shared/ui/image-text-horizontal-wrapper/image-text-horizontal-wrapper';
import { TextArrowWrapper } from '@/shared/ui/text-arrow-wrapper';
import { Title } from '@/shared/ui/title/title';
import { WorksData } from '@/shared/types';

type Props = {
  worksData: WorksData[];
};

export const Works = ({ worksData }: Props) => {
  return (
    <Box textAlign="center" maxW={1280} mx="auto">
      <Title title="WORKS" />

      {worksData?.map((data, index) => (
        <ImageTextHorizontalWrapper key={index} isReverse={index % 2 !== 0}>
          <VStack align="center" spacing={1}>
            <Link
              href={data.siteUrl}
              isExternal
              fontWeight="bold"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowWrapper text={data.title} />
            </Link>
            <Link
              href={data.gitHubUrl}
              isExternal
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowWrapper text="GitHub" />
            </Link>
            <Text>{data.description}</Text>
            <Text fontSize="sm" color="gray.600">
              {data.technology}
            </Text>
          </VStack>
          <Link href={data.siteUrl} isExternal>
            <SkeletonImageWrapper src={data.src} alt={data.alt} />
          </Link>
        </ImageTextHorizontalWrapper>
      ))}
    </Box>
  );
};
