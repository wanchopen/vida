/**
 * Created by romanzagumennov on 09/03/2017.
 */
import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './UserOverview.css';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import Badge from 'material-ui/Badge';
import SocialShare from 'material-ui/svg-icons/social/share';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import avatarChris from './images/chris.jpg';
import avatarHuw from './images/huw.jpg';
import avatarDev from './images/dev.jpg';
import avatarAlice from './images/alice.jpg';
import avatarClara from './images/clara.jpg';
import Divider from 'material-ui/Divider';
import {GridList, GridTile} from 'material-ui/GridList';
import imageManchester from './images/manchester.jpg';
import imageEnterShikari from './images/entershikari.jpg';
import imageNinaNesbitt from './images/ninanesbitt.jpg';
import imageWolfAlice from './images/wolfalice.jpg';
import imageGordonLewitt from './images/gordonlewitt.jpg';

const lastUserEntry = {
        idPost: 2,
        userName: 'Chris Martin',
        userProfession: 'Singer, songwriter, record producer',
        avatar: avatarChris,
        primaryText: 'Huw Rocks with Enter Shikari',
        date: 'Wed 16 Nov 2016 22:00',
        postTheme: 'Live Lounge',
        overlayTitle: 'Don\'t get lost in the wires, Rou!',
        overlaySubtitle: 'Enter Shikari in the Live Lounge',
        featuredImg: imageEnterShikari,
        cardText: 'Enter Shikari are in the Radio 1 Live Lounge for a special performance ahead of Radio 1 Rocks! ' +
        'There\'s also new music from Laura Welsh and Swim Deep!',
        views: '156',
    },
    lastUserReadingItem = {
        idPost: 3,
        userName: 'Huw Stephens',
        userProfession: 'Singer, songwriter, record producer',
        avatar: avatarHuw,
        primaryText: 'Nina Nesbitt in the Live Lounge',
        date: 'Sun 4 Dec 2016 6:00',
        postTheme: 'Weekends radio show',
        overlayTitle: 'Special Sunday',
        overlaySubtitle: 'From Scotland with love',
        featuredImg: imageNinaNesbitt,
        cardText: 'We had a very special Sunday Live Lounge with Scottish sweetheart Nina Nesbitt. Dev chose a good ' +
        'day to sit in for Huw!',
        views: '367',
    },
    lastUserPhotoStory = [{
            idPost: 4,
            userName: 'Chris Martin',
            userProfession: 'Singer, songwriter, record producer',
            avatar: avatarChris,
            primaryText: 'Wolf Alice in the Live Lounge',
            date: 'Tue 23 Jun 2015 10:00',
            postTheme: 'Live Lounge',
            overlayTitle: 'Ellie Rowsell of Wolf Alice sings in the Radio 1 Live Lounge',
            overlaySubtitle: 'Presenting their new single \'Bros\'',
            featuredImg: imageWolfAlice,
            cardText: 'Wolf Alice are in the Radio 1 Live Lounge for Clara, performing their new single \'Bros\' and a ' +
            'cover of Years & Years\' \'Desire\'. More live music from LA Priest who was in session for Huw Stephen\'s ' +
            'last night.',
            views: '763',
        },
        {
            idPost: 5,
            userName: 'Chris Martin',
            userProfession: 'Singer, songwriter, record producer',
            avatar: avatarChris,
            primaryText: 'Coldplay in Manchester - Visual treats and infectious niceness',
            date: 'Sun 5 Jun 2016 12:08',
            postTheme: 'Concerts',
            overlayTitle: 'Call it magic',
            overlaySubtitle: 'Their love of cliches may be comical at times, but band prove there are few serious ' +
            'challengers to their own heavyweight title',
            featuredImg: imageManchester,
            cardText: 'Halfway through Coldplay’s two-hour extravaganza, the band are on the time-honoured stadium rock ' +
            'trudge to a smaller stage in the middle of the audience, when they turn back to see the image of Muhammad ' +
            'Ali making one of his old speeches. On the day The Greatest died, to hear him say, “When I die, if there’s ' +
            'a heaven, I’m going to see it” provides a genuine lump-in-the-throat moment. The stadium erupts with ' +
            'spontaneous applause; Coldplay haven’t got where they are today without being able to capture personal ' +
            'intimacy and make it work on a grand scale.',
            views: '105',
        },
        {
            idPost: 6,
            userName: 'Chris Martin',
            userProfession: 'Singer, songwriter, record producer',
            avatar: avatarChris,
            primaryText: 'Gordon Lewitt and Alice Levine',
            date: 'Tue 23 Jun 2015 10:00',
            postTheme: 'Live Lounge',
            overlayTitle: 'Saturday\'s Special',
            overlaySubtitle: 'Alice chats Joseph Gordon-Levitt about the new Edward Snowden film.',
            featuredImg: imageGordonLewitt,
            cardText: 'Wolf Alice are in the Radio 1 Live Lounge for Clara, performing their new single \'Bros\' and a ' +
            'cover of Years & Years\' \'Desire\'. More live music from LA Priest who was in session for Huw Stephen\'s ' +
            'last night.',
            views: '763',
        },
        {
            idPost: 7,
            userName: 'Chris Martin',
            userProfession: 'Singer, songwriter, record producer',
            avatar: avatarChris,
            primaryText: 'Huw Rocks with Enter Shikari',
            date: 'Wed 16 Nov 2016 22:00',
            postTheme: 'Live Lounge',
            overlayTitle: 'Don\'t get lost in the wires, Rou!',
            overlaySubtitle: 'Enter Shikari in the Live Lounge',
            featuredImg: imageEnterShikari,
            cardText: 'Enter Shikari are in the Radio 1 Live Lounge for a special performance ahead of Radio 1 Rocks! ' +
            'There\'s also new music from Laura Welsh and Swim Deep!',
            views: '156',
        },
    ];

function UserOverview() {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.userOverviewContainer}>

                    <Paper zDepth={1} className={s.userOverviewHeader}>
                        <List className={s.userAvatar}>
                            <ListItem leftAvatar={<Avatar src={avatarChris} size={90}/>}
                                      className={s.userAvatarLabel}><span>Chris Martin</span></ListItem>
                        </List>

                        <List className={s.userInfo}>
                            <ListItem primaryText="City"
                                      secondaryText="London"/>
                            <ListItem primaryText="Work"
                                      secondaryText="Singer, songwriter, record producer" />
                            <ListItem primaryText="5 things I can't live without"
                                      secondaryText="Music, Ocean, Indian food, Big city, Studio" />
                        </List>
                    </Paper>

                    <h2 className={s.userOverviewHeading}>Entries</h2>
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title={lastUserEntry.overlayTitle}
                                                subtitle={lastUserEntry.overlaySubtitle} />}
                        >
                            <img src= {lastUserEntry.featuredImg} />
                        </CardMedia>
                        <CardTitle title={lastUserEntry.primaryText} />
                        <CardText>
                            {lastUserEntry.cardText}
                        </CardText>

                        <Divider />

                        <CardActions>
                            <IconButton tooltip="Add to Reading List"
                                        tooltipPosition="bottom-right">
                                <ActionBook className={s.viewsIcon} />
                            </IconButton>
                            <IconButton tooltip="Views"
                                        tooltipPosition="bottom-center"
                                        className={s.postViewsIcon}
                            >
                                <ActionVisibility className={s.viewsIcon}/>
                                <Badge
                                    badgeContent={49}
                                    primary={true}
                                    className={s.badgeViews}
                                />
                            </IconButton>
                            <IconButton tooltip="Share"
                                        tooltipPosition="bottom-center">
                                <SocialShare className={s.viewsIcon}/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    <h2 className={s.userOverviewHeading}>Reading List</h2>
                    <Card>
                        <CardHeader
                            title={lastUserReadingItem.userName}
                            subtitle={lastUserReadingItem.userProfession}
                            avatar= {lastUserReadingItem.avatar}
                            className={s.cardHeader}
                        />
                        <CardMedia
                            overlay={<CardTitle title={lastUserReadingItem.overlayTitle}
                                                subtitle={lastUserReadingItem.overlaySubtitle} />}
                        >
                            <img src= {lastUserReadingItem.featuredImg} />
                        </CardMedia>
                        <CardTitle title={lastUserReadingItem.primaryText} />
                        <CardText>
                            {lastUserReadingItem.cardText}
                        </CardText>

                        <Divider />

                        <CardActions>
                            <IconButton tooltip="Add to Reading List"
                                        tooltipPosition="bottom-right">
                                <ActionBook className={s.viewsIcon} />
                            </IconButton>
                            <IconButton tooltip="Views"
                                        tooltipPosition="bottom-center"
                                        className={s.postViewsIcon}
                            >
                                <ActionVisibility className={s.viewsIcon}/>
                                <Badge
                                    badgeContent={49}
                                    primary={true}
                                    className={s.badgeViews}
                                />
                            </IconButton>
                            <IconButton tooltip="Share"
                                        tooltipPosition="bottom-center">
                                <SocialShare className={s.viewsIcon}/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    <h2 className={s.userOverviewHeading}>Photo stories</h2>

                    <Card>

                        <CardMedia
                            overlay={<CardTitle title={lastUserPhotoStory[0].overlayTitle}
                                                subtitle={lastUserPhotoStory[0].overlaySubtitle} />}
                        >
                            <img src= {lastUserPhotoStory[0].featuredImg} />
                        </CardMedia>

                        <Divider />

                        <CardActions>
                            <IconButton tooltip="Add to Reading List"
                                        tooltipPosition="bottom-right">
                                <ActionBook className={s.viewsIcon} />
                            </IconButton>
                            <IconButton tooltip="Views"
                                        tooltipPosition="bottom-center"
                                        className={s.postViewsIcon}
                            >
                                <ActionVisibility className={s.viewsIcon}/>
                                <Badge
                                    badgeContent={49}
                                    primary={true}
                                    className={s.badgeViews}
                                />
                            </IconButton>
                            <IconButton tooltip="Share"
                                        tooltipPosition="bottom-center">
                                <SocialShare className={s.viewsIcon}/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    <h2 className={s.userOverviewHeading}>Videos</h2>

                    <Card>
                        <CardMedia>
                            <iframe width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/5APeY5qeGQE"
                                    frameBorder="0" allowFullScreen>
                            </iframe>
                        </CardMedia>

                        <Divider />

                        <CardActions>
                            <IconButton tooltip="Add to Reading List"
                                        tooltipPosition="bottom-right">
                                <ActionBook className={s.viewsIcon} />
                            </IconButton>
                            <IconButton tooltip="Views"
                                        tooltipPosition="bottom-center"
                                        className={s.postViewsIcon}
                            >
                                <ActionVisibility className={s.viewsIcon}/>
                                <Badge
                                    badgeContent={49}
                                    primary={true}
                                    className={s.badgeViews}
                                />
                            </IconButton>
                            <IconButton tooltip="Share"
                                        tooltipPosition="bottom-center">
                                <SocialShare className={s.viewsIcon}/>
                            </IconButton>
                        </CardActions>
                    </Card>

                </div>

            </div>
        </div>
    );
}

UserOverview.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(UserOverview);
