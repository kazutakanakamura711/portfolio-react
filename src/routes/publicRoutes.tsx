import { WorksPageContainer } from '@/pages/works';
import { GalleryPageContainer } from '@/pages/gallery';
import { TopPageContainer } from '@/pages/top';
import { ProfilePageContainer } from '@/pages/profile';

interface Route {
  label: string;
  path: string;
  element: JSX.Element;
}

export const publicRoutes: Route[] = [
  {
    label: 'TOP',
    path: '/',
    element: <TopPageContainer />,
  },
  {
    label: 'PROFILE',
    path: '/profile',
    element: <ProfilePageContainer />,
  },
  {
    label: 'WORKS',
    path: '/works',
    element: <WorksPageContainer />,
  },
  {
    label: 'GALLERY',
    path: '/gallery',
    element: <GalleryPageContainer />,
  },
];
