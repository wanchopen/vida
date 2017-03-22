/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import register from './register';
import content from './content';
import notFound from './notFound';
import flow from './flow';
import readingList from './readingList';
import entries from './entries';
import drafts from './drafts';
import newsbeats from './newsbeats';
import userOverview from './userOverview';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,
    login,
    register,
    flow,
    readingList,
    entries,
    drafts,
    newsbeats,
    userOverview,

    // place new routes before...
    content,
    notFound,
  ],

  async action({ next, context }) {
    let route;

    // Execute each child route until one of them return the result
    // TODO: move this logic to the `next` function
    do {
      route = await next();
    } while (!route);

    return {
      ...route,

      // Override the result of child route with extensions
      title: `${route.title || 'Untitled Page'}`,
      description: route.description || '',
      component: <App context={context}>{route.component}</App>,
    };
  },

};
