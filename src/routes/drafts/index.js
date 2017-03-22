import React from 'react';
import Drafts from './Drafts';

const title = 'Drafts';

export default {

    path: '/drafts',

    action() {
        return {
            title,
            component: <Drafts title={title} />,
        };
    },

};
