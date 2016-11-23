import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftNavigation.css';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ActionBook from 'material-ui/svg-icons/action/book';
import PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Link from '../Link';

function LeftNavigation() {
    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem
                primaryText={<Link className={s.link} to="/flow">Flow</Link>}
                leftIcon={<PlacesAllInclusive />}
            />
            <Divider />
            <MenuItem
                primaryText="Reading List"
                leftIcon={<ActionBook />}
            />
            <Divider />
            <MenuItem
                primaryText="Download"
                leftIcon={<Download/>}
                rightIcon={<ArrowDropRight />}
                menuItems={[
                    <MenuItem primaryText="UPPERCASE" />,
                    <MenuItem primaryText="lowercase" />,
                    <MenuItem primaryText="CamelCase" />,
                    <MenuItem primaryText="Propercase" />,
                ]}
            />




        </IconMenu>
    );
}

LeftNavigation.propTypes = {
    className: PropTypes.string,
};

export default withStyles(s)(LeftNavigation);