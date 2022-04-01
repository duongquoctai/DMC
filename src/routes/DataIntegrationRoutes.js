import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { PATH_DATA_INTEGRATION } from '~/routes/paths';
import DocsLayout from '~/layouts/DataIntegrationLayout';
import DashboardLayout from '~/layouts/DashboardLayout';
import HomeLayout from '~/layouts/HomeLayout';

const DataIntegrationRoutes = {
  path: PATH_DATA_INTEGRATION.root,
  layout: DocsLayout,
  routes: [
    {
      exact: true,
      path: PATH_DATA_INTEGRATION.list,
      component: lazy(() => import('src/views/data-integration/list-datablend'))
    },
    {
      exact: true,
      path: PATH_DATA_INTEGRATION.root,
      component: () => <Redirect to={PATH_DATA_INTEGRATION.list} />
    }
  ]
};

export default DataIntegrationRoutes;
