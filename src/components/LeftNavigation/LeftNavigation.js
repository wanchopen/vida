import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftNavigation.css';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionBook from 'material-ui/svg-icons/action/book';
import PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';
import Link from '../Link';



function LeftNavigation() {
    return (
        <div>
            <Paper className={s.menuPaper} role="navigation">
                    <Menu>
                        <MenuItem leftIcon={<PlacesAllInclusive/>}>
                            {<Link to="/flow">Flow</Link>}
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            primaryText={<Link className={s.link} to="/reading_list">Reading List</Link>}
                            leftIcon={<ActionBook />} />
                    </Menu>
            </Paper>
        </div>
    );
}

LeftNavigation.propTypes = {
    className: PropTypes.string,
};

export default withStyles(s)(LeftNavigation);