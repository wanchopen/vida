import React from 'react';
import ReadingList from './ReadingList';

const title = 'Reading List';

export default {

    path: '/reading_list',

    action() {
        return {
            title,
            component: <ReadingList title={title} />,
        };
    },

};
