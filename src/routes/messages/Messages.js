import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Messages.css';
import cx from 'classnames';
import SortingSelect from './../../components/UI/SortingSelect';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack, cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentForward from 'material-ui/svg-icons/content/forward';
import SocialShare from 'material-ui/svg-icons/social/share';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';
import avatarChris from './images/chris.jpg';
import avatarHuw from './images/huw.jpg';
import avatarDev from './images/dev.jpg';
import avatarAlice from './images/alice.jpg';
import avatarClara from './images/clara.jpg';

const iconButtonElement = (
    <IconButton
        touch={true}

    >
        <MoreVertIcon className={s.cardMenuIcon} />
    </IconButton>
),
    rightIconMenu = (
    <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        animated={false}
    >
        <MenuItem leftIcon={<ContentForward className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem}>Recommend</MenuItem>
        <MenuItem leftIcon={<SocialShare className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem} >Share</MenuItem>
        <MenuItem leftIcon={<ActionDelete className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem} >Move to Trash</MenuItem>
    </IconMenu>
);

class DialogsList extends Component {
    render() {
        return (
            <List>
                <Subheader className={s.cardsListSubHeading}>
                    <SortingSelect />

                </Subheader>
                <div className={s.cardsContainer}>
                    <ListItem
                        leftAvatar={<Avatar src={avatarClara} />}
                        rightIconButton={rightIconMenu}
                        className={s.card}
                        primaryText="Clara Amfo"
                    />
                    <ListItem
                        leftAvatar={<Avatar src={avatarAlice} />}
                        rightIconButton={rightIconMenu}
                        className={s.card}
                        primaryText="Alice Levine"
                    />
                    <ListItem
                        leftAvatar={<Avatar src={avatarDev} />}
                        rightIconButton={rightIconMenu}
                        className={s.card}
                        primaryText="Dev"
                    />
                    <ListItem
                        leftAvatar={<Avatar src={avatarHuw} />}
                        rightIconButton={rightIconMenu}
                        className={s.card}
                        primaryText="Huw Stephens"
                    />
                    <ListItem
                        leftAvatar={<Avatar src={avatarChris} />}
                        rightIconButton={rightIconMenu}
                        className={s.card}
                        primaryText="Chris Martin"
                    />
                </div>
            </List>
        );
    }
}

class SelectedDialog extends Component {
    sendMessage = () => {
        console.log('Message was sent');
    };

    render() {
        return (
            <Paper className={s.selectedDialog}>
                <div className={s.chat}>
                    <div className={s.clearfix}>
                        <List>
                            <ListItem
                                leftAvatar={<Avatar src={avatarClara} />}
                                rightIconButton={rightIconMenu}
                                className={s.card}
                                primaryText="Clara Amfo"
                            />
                        </List>
                    </div>
                    <div className={s.chatHistory}>
                        <div className={cx(s.messageData, s.alignRight)}>
                            <span className={s.messageDataTime} >10:10 AM, Today</span>
                            <span>Clara</span>
                        </div>
                        <div className={cx(s.message, s.otherMessage, s.floatRight)}>
                            Hi Eddie, how are you? How is the project coming along?
                        </div>

                        <div className={s.messageData}>
                            <span>Ed</span>
                            <span className={s.messageDataTime} >10:10 AM, Today</span>
                        </div>
                        <div className={cx(s.message, s.myMessage)}>
                            Are we meeting today? Project has been already finished and I have results to show you.
                        </div>

                        <div className={cx(s.messageData, s.alignRight)}>
                            <span className={s.messageDataTime} >10:10 AM, Today</span>
                            <span>Clara</span>
                        </div>
                        <div className={cx(s.message, s.otherMessage, s.floatRight)}>
                            Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you
                            faced any problems at the last phase of the project?
                        </div>

                        <div className={s.messageData}>
                            <span>Ed</span>
                            <span className={s.messageDataTime} >10:10 AM, Today</span>
                        </div>
                        <div className={cx(s.message, s.myMessage)}>
                            Actually everything was fine. I'm very excited to show this to our team.
                        </div>
                    </div>
                    <Paper className={cx(s.chatMessage, s.clearfix)}>
                        <TextField
                            className={s.newMessageField}
                            hintText="Enter your message"
                            floatingLabelText="New message"
                            multiLine={true}
                            rows={2}
                        />
                        <IconButton tooltip="Send your message"
                                    tooltipPosition="bottom-right"
                                    onTouchTap={this.sendMessage}>
                            <ContentSend color={grey400} className={s.viewsIcon}/>
                        </IconButton>
                    </Paper>
                </div>

            </Paper>
        );
    }
}

class Messages extends Component {
    state = {
        dialogs: [],
        selectedDialog: 1,
    };
    changeSelectedDialog = () => {};

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Paper className={s.readingListContainer}>
                        <DialogsList
                            selectedDialog={this.state.selectedCard}
                            cardsDialogsData={this.state.dialogs}
                            changeSelectedDialog={this.changeSelectedDialog}
                        />
                    </Paper>
                    <SelectedDialog />
                </div>
            </div>
        );
    }
}

Messages.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Messages);
