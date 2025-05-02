import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { MainLayout } from '@/layouts/main-layouts/main-layout';

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  return <MainLayout>{element}</MainLayout>;
};
