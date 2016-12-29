import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileInfo.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/chrismartin.jpg';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

function ProfileInfo () {
    return (
        <div className={s.root}>
            <List className={s.userArea}>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar
                            src={AvatarImage}
                            size={65}
                            className={s.userAvatar}
                        />
                    }
                    primaryText={
                        <span className={s.userName}>Chris Martin</span>
                    }
                />
            </List>
        </div>
    );
}

export default withStyles(s)(ProfileInfo);
