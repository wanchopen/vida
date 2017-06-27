import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Messages.css';
import cx from 'classnames';
import SortingSelect from './../../components/UI/SortingSelect';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack, cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentForward from 'material-ui/svg-icons/content/forward';
import ContentReply from 'material-ui/svg-icons/content/reply';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from 'material-ui/TextField';
import avatarChris from './images/chris.jpg';
import avatarHuw from './images/huw.jpg';
import avatarDev from './images/dev.jpg';
import avatarAlice from './images/alice.jpg';
import avatarClara from './images/clara.jpg';

const dialogsData = [
        {
            id: 1,
            name: 'Clara Amfo',
            avatar: avatarClara
        },
        {
            id: 2,
            name: 'Alice Levine',
            avatar: avatarAlice
        },
        {
            id: 3,
            name: 'Dev',
            avatar: avatarDev
        },
        {
            id: 4,
            name: 'Huw Stephens',
            avatar: avatarHuw
        },
        {
            id: 5,
            name: 'Chris Martin',
            avatar: avatarChris
        }
],
    messagesHistoryData = [
        {
            id: 1,
            history: [
                {
                    messageId: 1,
                    time: '10:10 AM, Today',
                    name: 'Clara Amfo',
                    isCurrentUser: false,
                    text: 'Hi Eddie, how are you? How is the project coming along?'
                },
                {
                    messageId: 2,
                    time: '10:11 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Are we meeting today? Project has been already finished and I have results to show you.'
                },
                {
                    messageId: 3,
                    time: '10:14 AM, Today',
                    name: 'Clara Amfo',
                    isCurrentUser: false,
                    text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you ' +
                    'faced any problems at the last phase of the project?'
                },
                {
                    messageId: 4,
                    time: '10-16 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Actually everything was fine. I\'m very excited to show this to our team.'
                }
            ]
        },
        {
            id: 2,
            history: [
                {
                    messageId: 5,
                    time: '10:10 AM, Today',
                    name: 'Alice Levine',
                    isCurrentUser: false,
                    text: 'Hi Eddie, how are you? How is the project coming along?'
                },
                {
                    messageId: 6,
                    time: '10:11 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Are we meeting today? Project has been already finished and I have results to show you.'
                },
                {
                    messageId: 7,
                    time: '10:14 AM, Today',
                    name: 'Alice Levine',
                    isCurrentUser: false,
                    text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you ' +
                    'faced any problems at the last phase of the project?'
                },
                {
                    messageId: 8,
                    time: '10-16 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Actually everything was fine. I\'m very excited to show this to our team.'
                },
                {
                    messageId: 9,
                    time: '10-17 AM, Today',
                    name: 'Alice Levine',
                    isCurrentUser: false,
                    text: 'Animatronic face gear and a giant muscle suit on stilts is probably not something you would ' +
                    'want to go out in on a Saturday night. But we can\'t speak for everyone on that...'
                }
            ]
        },
        {
            id: 3,
            history: [
                {
                    messageId: 10,
                    time: '10:10 AM, Today',
                    name: 'Dev',
                    isCurrentUser: false,
                    text: 'Hi Eddie, how are you? How is the project coming along?'
                },
                {
                    messageId: 11,
                    time: '10:11 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Are we meeting today? Project has been already finished and I have results to show you.'
                },
                {
                    messageId: 12,
                    time: '10:14 AM, Today',
                    name: 'Dev',
                    isCurrentUser: false,
                    text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you ' +
                    'faced any problems at the last phase of the project?'
                },
                {
                    messageId: 13,
                    time: '10:16 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Actually everything was fine. I\'m very excited to show this to our team.'
                },
                {
                    messageId: 14,
                    time: '10:16 AM, Today',
                    name: 'Dev',
                    isCurrentUser: false,
                    text: 'I will look back on the Big Weekend with live tracks from Hull and a game of Dev Or... with Clean Bandit!'
                }
            ]
        },
        {
            id: 4,
            history: [
                {
                    messageId: 15,
                    time: '10:10 AM, Today',
                    name: 'Huw Stephens',
                    isCurrentUser: false,
                    text: 'Hi Eddie, how are you? How is the project coming along?'
                },
                {
                    messageId: 16,
                    time: '10:11 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Are we meeting today? Project has been already finished and I have results to show you.'
                },
                {
                    messageId: 17,
                    time: '10:14 AM, Today',
                    name: 'Huw Stephens',
                    isCurrentUser: false,
                    text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you ' +
                    'faced any problems at the last phase of the project?'
                },
                {
                    messageId: 18,
                    time: '10:16 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Actually everything was fine. I\'m very excited to show this to our team.'
                },
                {
                    messageId: 19,
                    time: '10:18 AM, Today',
                    name: 'Huw Stephens',
                    isCurrentUser: false,
                    text: (
                        <div>
                            <p>
                                My passion for discovering and championing new music was spotted when at 17 he joined
                                Radio 1 for its Nations output to reflect the music scene in Wales.
                            </p>
                            <p>
                                I run my own record label and write regularly for various publications. He became
                                a national presenter on Radio 1 as frontman of the OneMusic show in 2005.
                            </p>
                        </div>
                    )
                }
            ]
        },
        {
            id: 5,
            history: [
                {
                    messageId: 20,
                    time: '10:10 AM, Today',
                    name: 'Chris Martin',
                    isCurrentUser: false,
                    text: 'Hi Eddie, how are you? How is the project coming along?'
                },
                {
                    messageId: 21,
                    time: '10:11 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Are we meeting today? Project has been already finished and I have results to show you.'
                },
                {
                    messageId: 22,
                    time: '10:14 AM, Today',
                    name: 'Chris Martin',
                    isCurrentUser: false,
                    text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you ' +
                    'faced any problems at the last phase of the project?'
                },
                {
                    messageId: 23,
                    time: '10:16 AM, Today',
                    name: 'Ed Sheeran',
                    isCurrentUser: true,
                    text: 'Actually everything was fine. I\'m very excited to show this to our team.'
                },
                {
                    messageId: 24,
                    time: '10:14 AM, Today',
                    name: 'Chris Martin',
                    isCurrentUser: false,
                    text: ' I guess life is beautiful in all it\'s colors, even the darker ones, they\'re here for a reason.'
                }
            ]
        }
    ];

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
        <MenuItem
            leftIcon={<CommunicationEmail className={s.menuIcon} color={cyan500}/>}
            className={s.rightMenuItem}>Write a message</MenuItem>
        <MenuItem
            leftIcon={<ActionDelete className={s.menuIcon} color={cyan500}/>}
            className={s.rightMenuItem} >Delete this dialog</MenuItem>
    </IconMenu>
),
    dialogIconMenu = (
        <IconMenu
            iconButtonElement={iconButtonElement}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            animated={false}
        >
            <MenuItem leftIcon={<ContentForward className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem}>Forward</MenuItem>
            <MenuItem leftIcon={<ContentReply className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem} >Reply</MenuItem>
            <MenuItem leftIcon={<ActionDelete className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem} >Delete</MenuItem>
        </IconMenu>
    );

class DialogsList extends Component {
    selectDialog = (dialog_id) => {
        this.props.changeSelectedDialog(dialog_id);
    };

    render() {
        return (
            <List>
                <Subheader className={s.cardsListSubHeading}>
                    <SortingSelect />

                </Subheader>
                <div className={s.cardsContainer}>
                    {this.props.cardsDialogsData.map((dialog) => (
                        <ListItem
                            key={dialog.id}
                            leftAvatar={<Avatar src={dialog.avatar} />}
                            rightIconButton={rightIconMenu}
                            className={s.card}
                            primaryText={
                                <span className={this.props.selectedDialog === dialog.id ? s.cardActive : ''}>
                                    {dialog.name}
                                </span>}
                            onClick={this.selectDialog.bind(this, dialog.id)}
                        />
                    ))}
                </div>
            </List>
        );
    }
}

class SelectedDialog extends Component {
    state = {
        textFieldValue: ''
    };
    handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    };
    sendMessage = () => {
        let length = this.props.history.length - 1,
            lastMessageId = this.props.history[length].messageId;
        let message = {
            messageId: lastMessageId + 1,
            time: '10:24 AM, Today',
            name: 'Ed Sheeran',
            isCurrentUser: true,
            text: this.state.textFieldValue
        };
        this.setState({
            textFieldValue: ''
        });
        this.props.sendMessage(message);
    };

    render() {
        return (
            <Paper className={s.selectedDialog}>
                <div className={s.chat}>
                    <div className={s.clearfix}>
                        <List>
                            <ListItem
                                leftAvatar={<Avatar src={this.props.selectedDialogInfo.avatar} />}
                                rightIconButton={dialogIconMenu}
                                className={s.card}
                                primaryText={this.props.selectedDialogInfo.name}
                            />
                        </List>
                    </div>
                    <div className={s.chatHistory} id="chat_history_wrapper">
                        {this.props.history.map((item) => (
                            <div key={item.messageId}>
                                <div className={!item.isCurrentUser ? cx(s.alignRight, s.messageData) : s.messageData}>
                                    {!item.isCurrentUser ? (
                                        <span>
                                            <span className={s.messageDataTime} >{item.time}</span>
                                            <span>{item.name}</span>
                                        </span>
                                        ) : (
                                        <span>
                                            <span className={s.messageDataName}>{item.name}</span>
                                            <span className={s.messageDataTime} >{item.time}</span>
                                        </span>
                                        )}
                                </div>
                                <div className={!item.isCurrentUser
                                    ? cx(s.otherMessage, s.floatRight, s.message) : cx(s.message, s.myMessage)}>
                                    {item.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Paper className={cx(s.chatMessage, s.clearfix)}>
                        <TextField
                            className={s.newMessageField}
                            hintText="Enter your message"
                            floatingLabelText="New message"
                            multiLine={true}
                            rows={2}
                            value={this.state.textFieldValue}
                            onChange={this.handleTextFieldChange}
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
        dialogs: dialogsData,
        selectedDialog: null,
        selectedDialogInfo: null,
        history: []
    };
    componentWillMount = () => {
        let selected = this.state.dialogs[0].id,
            info = this.state.dialogs[0];
        messagesHistoryData.forEach((item) => {
            if(item.id === selected) {
                let history = item.history;
                this.setState({
                    history: history,
                    selectedDialog: selected,
                    selectedDialogInfo: info
                });
            }
        });
    };
    componentDidMount = () => {
        // get the messagelist container and set the scrollTop to the height of the container
        const messages = document.getElementById('chat_history_wrapper');
        messages.scrollTop = messages.scrollHeight;
    };
    componentDidUpdate = () => {
        const messages = document.getElementById('chat_history_wrapper');
        messages.scrollTop = messages.scrollHeight;
    };
    changeSelectedDialog = (dialog_id) => {
        this.state.dialogs.forEach((item) => {
            if(item.id === dialog_id) {
                this.setState({
                    selectedDialogInfo: item
                });
            }
        });
        messagesHistoryData.forEach((item) => {
            if(item.id === dialog_id) {
                let history = item.history;
                this.setState({
                    history: history,
                    selectedDialog: dialog_id,
                });
            }
        });
    };

    sendMessage = (message) => {
        let tempHistory = this.state.history;
        tempHistory.push(message);
        this.setState({
            history: tempHistory
        });
    };

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Paper className={s.readingListContainer}>
                        <DialogsList
                            selectedDialog={this.state.selectedDialog}
                            cardsDialogsData={this.state.dialogs}
                            changeSelectedDialog={this.changeSelectedDialog}
                        />
                    </Paper>
                    <SelectedDialog history={this.state.history}
                                    historyLength={this.state.history.length - 1}
                                    selectedDialogInfo={this.state.selectedDialogInfo}
                                    sendMessage={this.sendMessage}/>
                </div>
            </div>
        );
    }
}

Messages.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Messages);
