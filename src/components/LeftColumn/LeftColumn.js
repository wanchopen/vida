import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftColumn.css';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuNavigation from 'material-ui/svg-icons/navigation/menu';
import ProfileInfo from '../ProfileInfo';
import LeftNavigation from '../LeftNavigation';

class LeftColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render () {
        return (
            <div className={s.root}>
                <IconButton onTouchTap={this.handleToggle}>
                    <MenuNavigation />
                </IconButton>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <ProfileInfo/>
                    <LeftNavigation/>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(s)(LeftColumn);
