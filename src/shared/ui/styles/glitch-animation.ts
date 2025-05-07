import { keyframes } from '@emotion/react';

export const glitchAnimation = keyframes`
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
