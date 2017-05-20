import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileAvatar.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/chris.jpg';
import OverlayImage from './images/chris-martin-overlay.jpg';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {grey400, cyan500} from 'material-ui/styles/colors';
import Request from 'material-ui/svg-icons/social/person-add';
import Message from 'material-ui/svg-icons/communication/email';
import IconButton from 'material-ui/IconButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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
                labelColor={cyan500}
                icon={<Request color={cyan500}/>}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                labelColor={cyan500}
                icon={<Message color={cyan500}/>}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <div>
                <Avatar color={grey400} src={AvatarImage} onTouchTap={this.handleOpen} className={s.userAvatar}/>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    actions={actions}
                    autoScrollBodyContent={true}
                    autoDetectWindowHeight={true}
                    actionsContainerClassName={s.actionsContainer}
                    onRequestClose={this.handleClose}
                    className={s.dialogWindow}
                >
                    <Card>
                        <CardHeader title="Chris Martin"
                                    subtitle="Singer, songwriter, record producer"
                                    avatar={AvatarImage}
                        />
                        <CardMedia overlay={[
                            <CardTitle title="Music, Ocean, Indian food, Big city, Studio"
                                       subtitle="Essentials"/>,
                            <CardTitle title="London"
                                       subtitle="City"/>,
                            <CardTitle title="40"
                                       subtitle="Age"/>,
                        ]}>
                            <img src={OverlayImage} />
                        </CardMedia>
                    </Card>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(s)(ProfileAvatar);