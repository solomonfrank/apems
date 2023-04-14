import { lazyImport } from '@/utils/lazyimport';

const { Landing } = lazyImport(() => import('@/features/publicArea'), 'Landing');
// const { Signup } = lazyImport(() => import('@/features/auth'), 'Signup');

export const publicRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
];
