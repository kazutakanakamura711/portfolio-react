import { FC, ReactNode } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Box } from '@chakra-ui/react';
import flowerPink from '../../../assets/images/flowerPink.png';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Box
          backgroundImage={`url(${flowerPink})`}
          backgroundSize="10%" // 画像を画面横幅の10%に設定
          backgroundRepeat="repeat" // 繰り返し表示
          backgroundPosition="center" // 画像の位置を中央に設定
          backgroundColor="rgba(255, 255, 255, 0.5)" // 背景色を半透明に設定
          backgroundBlendMode="overlay" // 背景色と画像を重ねる
          backgroundAttachment="fixed" // 背景画像を固定
        >
          <Box
            maxW={'1280px'}
            p="1rem"
            pt={{ base: '72px', md: '56px' }} // スマホで72px、PCで56pxのpadding-top
            mb={0}
            mx={'auto'}
          >
            {children}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
};
