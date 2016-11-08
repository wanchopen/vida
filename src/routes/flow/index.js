import React from 'react';
import Flow from './Flow';

const title = 'Flow';

export default {

    path: '/flow',

    action() {
        return {
            title,
            component: <Flow title={title} />,
        };
    },

};