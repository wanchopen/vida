import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileInfo.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/ed_sheeran.jpeg';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import Link from '../Link';
import NewEntry from '../UI/NewEntry';

function ProfileInfo () {
    return (
        <div className={s.root}>
            <div className={s.userArea}>
                <Link to="/user_overview">
                    <Avatar
                        src={AvatarImage}
                        className={s.userAvatar}
                    />
                </Link>
                <div className={s.newEntry}>
                    <NewEntry/>
                </div>
            </div>

        </div>
    );
}

export default withStyles(s)(ProfileInfo);
