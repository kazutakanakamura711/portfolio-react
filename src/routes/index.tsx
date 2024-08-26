import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { MainLayout } from '../components/layouts/mainLayout/MainLayout';

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  return <MainLayout>{element}</MainLayout>;
};
