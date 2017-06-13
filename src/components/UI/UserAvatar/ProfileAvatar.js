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

const customContentStyle = {
    width: '50%',
    maxWidth: '60%',
};

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
                <ContentForward color={grey400} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Send a Request"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <Request color={grey400} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Write a Message"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <Message color={grey400} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Watch later"
                        tooltipPosition="top-right"
                        onTouchTap={this.handleClose}>
                <ActionSchedule color={grey400} className={s.actionIcon}/>
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
                    contentStyle={customContentStyle}
                >
                    <div className={s.dialogWindowContainer}>
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
                            <CardTitle title="My early life and background"/>
                            <CardText>
                                Martin was educated at the pre-preparatory Hylton School and the
                                preparatory Exeter Cathedral School where he found his passion for music. After Exeter
                                Cathedral School, Martin boarded at Sherborne School in Dorset, where he met future
                                Coldplay manager Phil Harvey.
                                Martin continued his studies at University College London (UCL), staying at Ramsay Hall,
                                where he read Ancient World Studies and graduated with first-class honours in Greek and
                                Latin. At UCL, Martin met his future Coldplay bandmates Jonny Buckland, Guy Berryman and
                                Will Champion.
                            </CardText>
                        </Card>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(s)(ProfileAvatar);