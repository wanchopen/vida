import React from 'react';
import Messages from './Messages';

const title = 'Messages';

export default {

    path: '/messages',

    action() {
        return {
            title,
            component: <Messages title={title} />,
        };
    },

};
