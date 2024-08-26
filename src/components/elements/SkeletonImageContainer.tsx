import { Image, keyframes, Skeleton } from '@chakra-ui/react';
import { FC, useState } from 'react';

const glitchAnimation = keyframes`
  0% {
    transform: none;
  }
  33% {
    transform: none;
  }
  33.3% {
    transform: skewX(70deg);
  }
  33.6% {
    transform: skewX(-70deg);
  }
  33.9% {
    transform: none;
  }
  66% {
    transform: none;
  }
  66.3% {
    transform: skewX(55deg);
  }
  66.6% {
    transform: skewX(-55deg);
  }
  66.9% {
    transform: none;
  }
  77% {
    transform: none;
  }
  77.3% {
    transform: skewX(65deg);
  }
  77.6% {
    transform: skewX(-65deg);
  }
  77.9% {
    transform: none;
  }
`;

type Props = {
  src: string;
  alt: string;
  aspectRatio?: number; // オプションでアスペクト比を指定できる
  width?: string; // 任意の幅を指定できる
  height?: string; // 任意の高さを指定できる
  border?: string; // 任意のボーダーを指定できる
  borderColor?: string; // 任意のボーダーカラーを指定できる
  isGlitch?: boolean; // グリッチエフェクトを付与するかどうか
};

export const SkeletonImageContainer: FC<Props> = ({
  src,
  alt,
  aspectRatio,
  width = '100%',
  height = 'auto',
  border = '0',
  borderColor = 'none',
  isGlitch,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton
      isLoaded={isLoaded}
      startColor={'blackAlpha.500'}
      endColor={'orange.500'}
    >
      <Image
        src={src}
        alt={alt}
        w={width}
        h={height}
        objectFit="cover"
        aspectRatio={aspectRatio}
        border={border}
        borderColor={borderColor}
        animation={isGlitch ? `${glitchAnimation} 5s ease-in-out infinite` : ''}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </Skeleton>
  );
};
