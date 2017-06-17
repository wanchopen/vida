import React from 'react';
import Events from './Events';

const title = 'Events';

export default {

    path: '/events',

    action() {
        return {
            title,
            component: <Events title={title} />,
        };
    },

};
