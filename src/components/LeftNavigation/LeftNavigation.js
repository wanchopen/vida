import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftNavigation.css';
import cx from 'classnames';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {grey400, cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import IconButton from 'material-ui/IconButton';
import ActionBook from 'material-ui/svg-icons/action/book';
import PlacesAllInclusive from 'material-ui/svg-icons/places/all-inclusive';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import CommunicationChat from 'material-ui/svg-icons/communication/chat';
import SocialPublic from 'material-ui/svg-icons/social/public';
import CommunicationContactMail from 'material-ui/svg-icons/communication/contact-mail';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Link from '../Link';
import history from '../../core/history';

const rightIconElement = (
    <IconButton className={s.rightMenuIcon}>
        <KeyboardArrowDown color={cyan500}/>
    </IconButton>
);

let currentPath = (history.location) ? history.location.pathname : 'none';
console.log(currentPath);

class MyCupOfTea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selected: '',
        };
    }
    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };
    setCurrentPageStyle = (menuItem) => {
        this.setState({selected: menuItem});
    };
    componentWillMount() {
        this.setState({selected: 'flow'});
        currentPath = history.getCurrentLocation().pathname;
        console.log("it is working", currentPath);
    }

    render() {

        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="My Cup Of Tea"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        className={cx(s.menuSubheader, s.menuItem)}
                        rightIcon={rightIconElement}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/flow" className={s.link}>Flow</Link>}
                                leftIcon={<PlacesAllInclusive className={s.menuIcon} color={cyan500}/>}
                                className={this.state.selected === 'flow' ? s.activeLink : s.menuitem}
                                onClick={this.setCurrentPageStyle.bind(this, 'flow')}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/reading_list" className={s.link}>Reading List</Link>}
                                leftIcon={<ActionBook className={s.menuIcon} color={cyan500}/>}
                                className={this.state.selected === 'reading_list' ? s.activeLink : s.menuitem}
                                onClick={this.setCurrentPageStyle.bind(this, 'reading_list')}
                            />,
                            <ListItem
                                key={3}
                                value={3}
                                primaryText={<Link to="/#" className={s.link}>Entries</Link>}
                                leftIcon={<ImageEdit className={s.menuIcon} color={cyan500}/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={4}
                                value={4}
                                primaryText={<Link to="/#" className={s.link}>NewsBeats</Link>}
                                leftIcon={<SocialPublic className={s.menuIcon} color={cyan500}/>}
                                className={s.menuItem}
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
    render() {
        return (
            <List>
                <Subheader className={s.subMenu}>
                    <ListItem
                        primaryText="Mail"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        className={cx(s.menuSubheader, s.menuItem)}
                        rightIcon={rightIconElement}
                        nestedItems={[
                            <ListItem
                                key={1}
                                value={1}
                                primaryText={<Link to="/#" className={s.link}>Messages</Link>}
                                leftIcon={<CommunicationContactMail className={s.menuIcon} color={cyan500}/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={2}
                                value={2}
                                primaryText={<Link to="/#" className={s.link}>Drafts</Link>}
                                leftIcon={<ContentDrafts className={s.menuIcon} color={cyan500}/>}
                                className={s.menuItem}
                            />,
                            <ListItem
                                key={3}
                                value={3}
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

class LeftNavigation extends Component {

    render() {
        return (
            <div className={s.menuPaper}>
                <MyCupOfTea />
                <MailBox />
            </div>
        );
    }
}

LeftNavigation.propTypes = {
    className: PropTypes.string,
};

export default withStyles(s)(LeftNavigation);
