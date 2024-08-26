import { Box, Link, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Title } from '../../components/elements/Title';
import { worksData } from '../../config/constants';
import { ImageTextHorizontalContainer } from '../../components/elements/ImageTextHorizontalContainer';
import { TextArrowContainer } from '../../components/elements/TextArrowContainer';
import { SkeletonImageContainer } from '../../components/elements/SkeletonImageContainer';

export const Works: FC = () => {
  return (
    <Box textAlign="center" maxW={1280} mx="auto">
      <Title title="WORKS" />

      {worksData.map((data, index) => (
        <ImageTextHorizontalContainer key={index} reverse={index % 2 !== 0}>
          <VStack align="center" spacing={1}>
            <Link
              href={data.siteUrl}
              isExternal
              fontWeight="bold"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowContainer text={data.title} />
            </Link>
            <Link
              href={data.gitHubUrl}
              isExternal
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <TextArrowContainer text="GitHub" />
            </Link>
            <Text>{data.description}</Text>
            <Text fontSize="sm" color="gray.600">
              {data.technology}
            </Text>
          </VStack>
          <Link href={data.siteUrl} isExternal>
            <SkeletonImageContainer src={data.src} alt={data.alt} />
          </Link>
        </ImageTextHorizontalContainer>
      ))}
    </Box>
  );
};
