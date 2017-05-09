import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileAvatar.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/chrismartin.jpg';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {cyan500} from 'material-ui/styles/colors';
import Profession from 'material-ui/svg-icons/action/build';
import Age from 'material-ui/svg-icons/action/date-range';
import PlaceOnMap from 'material-ui/svg-icons/maps/place';
import Essentials from 'material-ui/svg-icons/action/language';
import Request from 'material-ui/svg-icons/social/person-add';
import Message from 'material-ui/svg-icons/communication/email';
import IconButton from 'material-ui/IconButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';


class ProfileAvatar extends Component {
    state = {
        open: false,
    };
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <RaisedButton
                label="Send a request"
                labelColor={cyan500}
                icon={<Request color={cyan500}/>}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Write a message"
                labelColor={cyan500}
                icon={<Message color={cyan500}/>}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <Avatar src={AvatarImage} onTouchTap={this.handleOpen} className={s.userAvatar}/>
                <Dialog
                    title="Chris Martin Info"
                    modal={false}
                    open={this.state.open}
                    actions={actions}
                    onRequestClose={this.handleClose}
                >
                    <List>
                        <ListItem
                            primaryText="Chris Martin"
                            leftAvatar={<Avatar src={AvatarImage}/>}
                        />
                    </List>
                    <Divider inset={true} />
                    <ListItem
                        leftIcon={<Age />}
                        primaryText="40 years old"
                    />
                    <List>
                        <ListItem leftIcon={<Profession />}
                                  primaryText="Singer, songwriter, record producer"
                        />
                        <ListItem leftIcon={<PlaceOnMap />}
                                  primaryText="London"
                        />
                    </List>
                    <ListItem
                        leftIcon={<Essentials />}
                        primaryText="Music, Ocean, Indian food, Big city, Studio"
                    />
                </Dialog>
            </div>
        );
    }
}

export default withStyles(s)(ProfileAvatar);