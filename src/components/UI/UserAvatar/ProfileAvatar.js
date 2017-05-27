import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProfileAvatar.css';
import Avatar from 'material-ui/Avatar';
import AvatarImage from './images/chris.jpg';
import OverlayImage from './images/chris-martin-overlay.jpg';
import Dialog from 'material-ui/Dialog';
import Link from '../../Link';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {grey400, cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Request from 'material-ui/svg-icons/social/person-add';
import Message from 'material-ui/svg-icons/communication/email';
import ContentForward from 'material-ui/svg-icons/content/forward';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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
            <IconButton tooltip="Recommend"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <ContentForward color={cyan500} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Send a Request"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <Request color={cyan500} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Write a Message"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <Message color={cyan500} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Watch later"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <ActionSchedule color={cyan500} className={s.actionIcon}/>
            </IconButton>
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
                    <IconButton className={s.closeButton}
                                onTouchTap={this.handleClose}>
                        <NavigationClose color={grey400} className={s.viewsIcon}/>
                    </IconButton>
                    <Card>
                        <CardHeader title={<Link to="#" className={s.link}>Chris Martin</Link>}
                                    subtitle="Singer, songwriter, record producer, 40, London"
                                    avatar={AvatarImage}
                        />
                        <CardMedia overlay={<CardTitle title="Music, Ocean, Indian food, Big city, Studio"
                                       subtitle="Essentials"/>}
                                   className={s.imageContainer}
                        >
                            <img src={OverlayImage} />
                        </CardMedia>
                    </Card>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(s)(ProfileAvatar);