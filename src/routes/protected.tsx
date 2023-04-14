import { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// import { lazyImport } from '@/utils/lazyimport';

//const { Dashboard } = lazyImport(() => import('@/features/msc'), 'Dashboard');

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      // {
      //   path: 'dashboard',
      //   element: <Dashboard />,
      // },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];
