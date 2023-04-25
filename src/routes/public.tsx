import { lazyImport } from '@/utils/lazyimport';

const { AuthRoute } = lazyImport(() => import('@/features/auth'), 'AuthRoute');

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoute />,
  },
];
