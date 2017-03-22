import React from 'react';
import Entries from './Entries';

const title = 'Reading List';

export default {

    path: '/entries',

    action() {
        return {
            title,
            component: <Entries title={title} />,
        };
    },

};