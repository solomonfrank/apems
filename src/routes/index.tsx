import { RouteObject, useRoutes } from 'react-router-dom';

// import { Landing } from '@/features/msc';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const isLoggedIn = false;

  const commonRoutes = [] as RouteObject[];
  const routes = isLoggedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
