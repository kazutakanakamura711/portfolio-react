import firstCollage from '@/assets/images/firstCollage.jpg';
import profileImg from '@/assets/images/profileImg.jpg';
import gallery from '@/assets/images/gallery.jpg';
import crane from '@/assets/images/crane.png';
import { Box, Text } from '@chakra-ui/react';
import { SkeletonImageWrapper } from '@/shared/ui/skeleton-image-wrapper';
import { Title } from '@/shared/ui/title/title';
import { ImageTextHorizontalWrapper } from '@/shared/ui/image-text-horizontal-wrapper/image-text-horizontal-wrapper';
import { Slider } from '@/shared/ui/slider';
import { WorksData } from '@/shared/types';
import { glitchAnimation } from '@/shared/ui/styles';

type Props = {
  worksData: WorksData[];
};

export const Top = ({ worksData }: Props) => {
  return (
    <Box textAlign="center" maxW={1280} mx="auto">
      <section>
        <Box textAlign="center" py={8} mx="auto">
          <SkeletonImageWrapper src={firstCollage} alt="Topの画像" isGlitch />
        </Box>
      </section>

      <section>
        <Box textAlign="center" py={8} maxW="100vw" mx="auto">
          <Title title="PROFILE" isGlitch />
          <Box display="flex" justifyContent="center" mx="auto">
            <SkeletonImageWrapper
              src={profileImg}
              alt="Profileの画像"
              width="150px"
              height="150px"
            />
          </Box>
          <Text fontSize="xl" mt={4}>
            KAZUTAKA NAKAMURA
          </Text>
          <Text fontSize="md">フロントエンドエンジニア</Text>
        </Box>
      </section>

      <section>
        <Box textAlign="center" py={8} maxW="100vw" mx="auto">
          <Title title="WORKS" isGlitch />
          <ImageTextHorizontalWrapper>
            <Text mb={4}>
              実案件以外の制作物です。
              <br />
              ちょっとしたブラウザゲームです。
              <br />
              自分用のスタイルコピペサイトもあります。
            </Text>
            <Box>
              <SkeletonImageWrapper src={crane} alt="WORKSの画像" />
            </Box>
          </ImageTextHorizontalWrapper>

          <Box mx={'auto'} w={'100%'} maxW={'768px'}>
            <Box mt={8}>
              <Slider slides={worksData} />
            </Box>
          </Box>
        </Box>
      </section>

      <section>
        <Box textAlign="center" py={8} maxW="100vw" mx="auto">
          <Box animation={`${glitchAnimation} 5s ease-in-out infinite`}>
            <Title title="GALLERY" />
          </Box>
          <ImageTextHorizontalWrapper>
            <SkeletonImageWrapper src={gallery} alt="Galleryの画像" />
            <Box>
              <Text mb={4}>
                趣味で制作したPhotoshopの画像作品集です。
                <br />
                写真のコラージュを中心に制作しています。
              </Text>
            </Box>
          </ImageTextHorizontalWrapper>
        </Box>
      </section>
    </Box>
  );
};
