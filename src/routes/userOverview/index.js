/**
 * Created by romanzagumennov on 09/03/2017.
 */

import React from 'react';
import UserOverview from './UserOverview';

const title = 'User Overview';

export default {

    path: '/user_overview',

    action() {
        return {
            title,
            component: <UserOverview title={title} />,
        };
    },

};
