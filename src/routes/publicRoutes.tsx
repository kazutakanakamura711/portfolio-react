import { GalleryPage } from '../pages/gallery';
import { ProfilePage } from '../pages/profile';
import { TopPage } from '../pages/top';
import { WorksPage } from '../pages/works';

interface Route {
  label: string;
  path: string;
  element: JSX.Element;
}

export const publicRoutes: Route[] = [
  {
    label: 'TOP',
    path: '/',
    element: <TopPage />,
  },
  {
    label: 'PROFILE',
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    label: 'WORKS',
    path: '/works',
    element: <WorksPage />,
  },
  {
    label: 'GALLERY',
    path: '/gallery',
    element: <GalleryPage />,
  },
];
