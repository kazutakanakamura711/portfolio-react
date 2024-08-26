import { Box, Text } from '@chakra-ui/react';
import firstCollage from '../../assets/images/firstCollage.jpg';
import profileImg from '../../assets/images/profileImg.jpg';
import gallery from '../../assets/images/gallery.jpg';
import crane from '../../assets/images/crane.png';
import { FC } from 'react';
import { Title } from '../../components/elements/Title';
import { Slider } from '../../components/elements/Slider';
import { worksData } from '../../config/constants';
import { ImageTextHorizontalContainer } from '../../components/elements/ImageTextHorizontalContainer';
import { SkeletonImageContainer } from '../../components/elements/SkeletonImageContainer';

export const Top: FC = () => {
  return (
    <Box textAlign="center" maxW={1280} mx="auto">
      <section>
        <Box textAlign="center" py={8} mx="auto">
          <SkeletonImageContainer src={firstCollage} alt="Topの画像" isGlitch />
        </Box>
      </section>

      <section>
        <Box textAlign="center" py={8} maxW="100vw" mx="auto">
          <Title title="PROFILE" />
          <Box display="flex" justifyContent="center" mx="auto">
            <SkeletonImageContainer
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
          <Title title="WORKS" />
          <ImageTextHorizontalContainer>
            <Text mb={4}>
              実案件以外の制作物です。
              <br />
              ちょっとしたブラウザゲームです。
              <br />
              自分用のスタイルコピペサイトもあります。
            </Text>
            <Box>
              <SkeletonImageContainer src={crane} alt="WORKSの画像" />
            </Box>
          </ImageTextHorizontalContainer>

          <Box mx={'auto'} w={'100%'} maxW={'768px'}>
            <Box mt={8}>
              <Slider slides={worksData} />
            </Box>
          </Box>
        </Box>
      </section>

      <section>
        <Box textAlign="center" py={8} maxW="100vw" mx="auto">
          <Title title="GALLERY" />
          <ImageTextHorizontalContainer>
            <SkeletonImageContainer src={gallery} alt="Galleryの画像" />
            <Box>
              <Text mb={4}>
                趣味で制作したPhotoshopの画像作品集です。
                <br />
                写真のコラージュを中心に制作しています。
              </Text>
            </Box>
          </ImageTextHorizontalContainer>
        </Box>
      </section>
    </Box>
  );
};
