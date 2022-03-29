import React, { lazy } from 'react';
import { PATH_DATA_INTEGRATION } from '~/routes/paths';
import DocsLayout from '~/layouts/DocsLayout';
import DashboardLayout from '~/layouts/DashboardLayout';

const DataIntegrationRoutes = {
  path: PATH_DATA_INTEGRATION.root,
  layout: DashboardLayout,
  routes: [
    {
      path: PATH_DATA_INTEGRATION.list,
      component: lazy(() => import('src/views/data-integration/list-datablend'))
    }
  ]
};

export default DataIntegrationRoutes;
