import { useRoutes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyimport';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const { Landing } = lazyImport(() => import('@/features/publicArea'), 'Landing');

export const AppRoutes = () => {
  const isLoggedIn = false;

  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];
  const routes = isLoggedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
