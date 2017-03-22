import React from 'react';
import Newsbeats from './Newsbeats';

const title = 'Newsbeats';

export default {

    path: '/newsbeats',

    action() {
        return {
            title,
            component: <Newsbeats title={title} />,
        };
    },

};