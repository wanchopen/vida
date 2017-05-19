import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileInfo.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/chris.jpg';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import Link from '../Link';

function ProfileInfo () {
    return (
        <div className={s.root}>
            <List className={s.userArea}>
                <ListItem
                    disabled={true}
                    leftIcon={<IconButton>
                        <Link to="/user_overview">
                            <Avatar
                                src={AvatarImage}
                                className={s.userAvatar}
                            />
                        </Link>
                    </IconButton>}

                />
            </List>

        </div>
    );
}

export default withStyles(s)(ProfileInfo);
