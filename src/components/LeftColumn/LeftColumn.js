import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftColumn.css';
import ProfileInfo from '../ProfileInfo';
import LeftNavigation from '../LeftNavigation';

function LeftColumn () {
    return (
        <div className={s.root}>
            <ProfileInfo/>
            <LeftNavigation/>
        </div>
    );
}

export default withStyles(s)(LeftColumn);
