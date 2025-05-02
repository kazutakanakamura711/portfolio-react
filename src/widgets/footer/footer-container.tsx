import { FC } from 'react';
import { Footer } from './ui';

export const FooterContainer: FC = () => {
  const year = new Date().getFullYear();

  return <Footer year={year} />;
};
