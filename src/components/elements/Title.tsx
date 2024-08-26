import { Heading, keyframes } from '@chakra-ui/react';
import { FC } from 'react';
import { Parallax } from 'react-scroll-parallax';

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
  title: string;
};

export const Title: FC<Props> = ({ title }) => {
  return (
    <Parallax translateY={[-80, 80]}>
      <Heading
        as="h2"
        size="lg"
        mb={8}
        letterSpacing="0.2em"
        animation={`${glitchAnimation} 1s ease-in-out infinite`}
      >
        {title}
      </Heading>
    </Parallax>
  );
};
