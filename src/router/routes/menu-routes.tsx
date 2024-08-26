import { Navigate } from 'react-router-dom';

import DashboardLayout from '@/layouts/dashboard';

import { getRoutesFromModules } from '../utils';

import { AppRouteObject } from '#/router';

const menuModuleRoutes = getRoutesFromModules();

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

/**
 * dynamic routes
 */
export const menuRoutes: AppRouteObject = {
  path: '/',
  element: (

    <DashboardLayout />

  ),
  children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }, ...menuModuleRoutes],
};
