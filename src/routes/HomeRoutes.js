import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from '~/layouts/HomeLayout';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '/app',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/app/dashboard',
      // component: lazy(() => import('~/views/home/LandingPageView'))
      component: () => <Redirect to="/app/dashboard/overview" />
    },
    {
      exact: true,
      path: '/app/components',
      component: lazy(() => import('~/components/LoadingScreen'))
    }
    // {
    //   component: () => <Redirect to="/404" />
    // }
  ]
};

export default HomeRoutes;
