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

const tilesData = [
    {
        img: imageManchester,
        title: 'Manchester',
        author: 'jill111',
    },
    {
        img: imageNinaNesbitt,
        title: 'Nina Nesbitt',
        author: 'pashminu',
    },
    {
        img: imageEnterShikari,
        title: 'Enter Shikari',
        author: 'Danson67',
    },
    {
        img: imageGordonLewitt,
        title: 'Gordon Lewitt and Alice Levine',
        author: 'fancycrave1',
    },
    {
        img: imageWolfAlice,
        title: 'Wolf Alice',
        author: 'Hans',
    },
];

const lastUserEntry = {
        idPost: 2,
        userName: 'Huw Stephens',
        userProfession: 'Welsh radio presenter',
        avatar: avatarHuw,
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
        userName: 'Dev',
        userProfession: 'British actor, radio presenter and DJ',
        avatar: avatarDev,
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
    lastUserPhotoStory = {
        idPost: 4,
        userName: 'Clara Amfo',
        userProfession: 'Radio presenter in the mid-morning show on BBC Radio 1',
        avatar: avatarClara,
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
    };

function UserOverview() {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.userOverviewContainer}>

                    <Avatar src={avatarChris} size={90}/>


                    <h2 className={s.userOverviewHeading}>Entries</h2>
                    <Card>
                        <CardHeader
                            title={lastUserEntry.userName}
                            subtitle={lastUserEntry.userProfession}
                            avatar= {lastUserEntry.avatar}
                            className={s.cardHeader}
                        />
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

                    <div className={s.gridContainer}>
                        <GridList className={s.gridList} cols={2.2}>
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                >
                                    <img src={tile.img} />
                                </GridTile>
                            ))}
                        </GridList>
                    </div>
                    <Divider />

                    <h2 className={s.userOverviewHeading}>Reading List</h2>
                    <div className={s.gridContainer}>
                        <GridList className={s.gridList} cols={2.2}>
                            {tilesData.map((tile) => (
                                <GridTile
                                    key={tile.img}
                                    title={tile.title}
                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                >
                                    <img src={tile.img} />
                                </GridTile>
                            ))}
                        </GridList>
                    </div>
                    <Divider />
                </div>

            </div>
        </div>
    );
}

UserOverview.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(UserOverview);
