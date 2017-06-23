import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftNavigation.css';
import cx from 'classnames';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import {grey400, cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconButton from 'material-ui/IconButton';
import AVVideoLibrary from 'material-ui/svg-icons/av/video-library';
import AVLibraryMusic from 'material-ui/svg-icons/av/library-music';
import PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import SocialPublic from 'material-ui/svg-icons/social/public';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import ActionEvent from 'material-ui/svg-icons/action/event';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import Link from '../Link';

const rightIconDown = (
    <IconButton className={s.rightMenuIcon}>
        <KeyboardArrowDown color={cyan500}/>
    </IconButton>
),
    rightIconUp = (
        <IconButton className={s.rightMenuIcon}>
            <KeyboardArrowUp color={cyan500}/>
        </IconButton>
    ),
    facebookIcon = (
        <IconButton iconClassName="muidocs-icon-custom-github" color={cyan500} />
    );

class SettingsIcon extends Component {
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
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <ActionSettings color={grey400} className={s.settingsIcon} onTouchTap={this.handleOpen}/>
                <Dialog
                    title={this.props.title + ' Settings'}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    className={s.settingsDialog}
                >
                    <List>
                        <ListItem
                            primaryText="When calls and notifications arrive"
                            secondaryText="Always interrupt"
                        />
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Priority Interruptions</Subheader>
                        <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                        <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                        <ListItem primaryText="Messages" rightToggle={<Toggle />} />
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Hangout Notifications</Subheader>
                        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                    </List>
                </Dialog>
            </div>
        );
    }
}

class MyCupOfTea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };
    setCurrentPageStyle = (menuItem) => {
        this.props.setCurrentPage(menuItem);
    };

    render() {

        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="My Cup Of Tea"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        onNestedListToggle={this.handleNestedListToggle}
                        className={s.menuSubheader}
                        rightIcon={this.state.open === false ? rightIconDown : rightIconUp}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/reading_list" className={s.link}>Reading List</Link>}
                                leftIcon={<ActionBook className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Reading List"/>}
                                className={this.props.currentPage === 'reading_list' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'reading_list')}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/entries" className={s.link}>Entries</Link>}
                                leftIcon={<ImageEdit className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Entries"/>}
                                className={this.props.currentPage === 'entries' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'entries')}
                            />,
                            <ListItem
                                key={3}
                                value={3}
                                primaryText={<Link to="/drafts" className={s.link}>Drafts</Link>}
                                leftIcon={<ContentDrafts className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Drafts"/>}
                                className={this.props.currentPage === 'drafts' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'drafts')}
                            />
                                ]}
                    />
                </Subheader>
            </List>
        );
    }
}

class MailBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selected: ''
        };
    }
    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };
    setCurrentPageStyle = (menuItem) => {
        this.props.setCurrentPage(menuItem);
    };
    render() {
        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="Mail"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        onNestedListToggle={this.handleNestedListToggle}
                        className={s.menuSubheader}
                        rightIcon={this.state.open === false ? rightIconDown : rightIconUp}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/#" className={s.link}>Recommended</Link>}
                                leftIcon={<ActionFace className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Recommended"/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/messages" className={s.link}>Messages</Link>}
                                leftIcon={<CommunicationContactMail className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Messages"/>}
                                className={this.props.currentPage === 'messages' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'messages')}
                            />,
                            <ListItem
                                key={3}
                                value={3}
                                primaryText={<Link to="/#" className={s.link}>Facebook</Link>}
                                leftIcon={facebookIcon}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={4}
                                value={4}
                                primaryText={<Link to="/#" className={s.link}>Gmail</Link>}
                                leftIcon={<CommunicationMailOutline className={s.menuIcon} color={cyan500}/>}
                                className={s.menuItem}
                            />
                        ]}
                    />
                </Subheader>
            </List>
        );
    }
}

class GoingsOn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };
    setCurrentPageStyle = (menuItem) => {
        this.props.setCurrentPage(menuItem);
    };
    render() {
        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="Goings On"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        onNestedListToggle={this.handleNestedListToggle}
                        className={s.menuSubheader}
                        rightIcon={this.state.open === false ? rightIconDown : rightIconUp}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/flow" className={s.link}>Flow</Link>}
                                leftIcon={<PlacesAllInclusive className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Flow"/>}
                                className={this.props.currentPage === 'flow' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'flow')}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/newsbeats" className={s.link}>NewsBeats</Link>}
                                leftIcon={<SocialPublic className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="NewsBeats"/>}
                                className={this.props.currentPage === 'newsbeats' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'newsbeats')}
                            />,
                            <ListItem
                                key={3}
                                value={3}
                                primaryText={<Link to="/events" className={s.link}>Events</Link>}
                                leftIcon={<ActionEvent className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Events"/>}
                                className={this.props.currentPage === 'events' ? s.activeLink : s.menuItem}
                                onClick={this.setCurrentPageStyle.bind(this, 'events')}
                            />
                        ]}
                    />
                </Subheader>
            </List>
        );
    }
}

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selected: ''
        };
    }
    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };
    render() {
        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="Media"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        onNestedListToggle={this.handleNestedListToggle}
                        className={s.menuSubheader}
                        rightIcon={this.state.open === false ? rightIconDown : rightIconUp}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/#" className={s.link}>Photo Stories</Link>}
                                leftIcon={<ImagePhotoLibrary className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Photo Stories"/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/#" className={s.link}>Videos</Link>}
                                leftIcon={<AVVideoLibrary className={s.menuIcon} color={cyan500} />}
                                rightIcon={<SettingsIcon title="Videos"/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={3}
                                value={3}
                                primaryText={<Link to="/#" className={s.link}>Music</Link>}
                                leftIcon={<AVLibraryMusic className={s.menuIcon} color={cyan500}/>}
                                rightIcon={<SettingsIcon title="Music"/>}
                                className={s.menuItem}
                            />
                        ]}
                    />
                </Subheader>
            </List>
        );
    }
}

class LeftNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: '',
        };
    }
    setCurrentPage = (menuItem) => {
        this.setState({currentPage: menuItem});
    };
    render() {
        return (
            <div className={s.menuPaper}>
                <MyCupOfTea setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage}/>
                <MailBox setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage}/>
                <GoingsOn setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage}/>
                <Media />
            </div>
        );
    }
}

LeftNavigation.propTypes = {
    className: PropTypes.string,
};

export default withStyles(s)(LeftNavigation);
