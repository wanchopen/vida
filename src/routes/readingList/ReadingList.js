import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ReadingList.css';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentForward from 'material-ui/svg-icons/content/forward';
import avatarChris from './images/chris.jpg';
import avatarHuw from './images/huw.jpg';
import avatarDev from './images/dev.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import imageManchester from './images/manchester.jpg';
import imageEnterShikari from './images/entershikari.jpg';
import imageNinaNesbitt from './images/ninanesbitt.jpg';

const iconButtonElement = (
    <IconButton
        touch={true}
    >
        <MoreVertIcon color={cyan500} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement} >
        <MenuItem leftIcon={<ContentForward/>}>Recommend</MenuItem>
        <MenuItem leftIcon={<ActionDelete/>}>Delete</MenuItem>
    </IconMenu>
);

const cardsData = [
    {
        idPost: 1,
        userName: 'Chris Martin',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarChris,
        primaryText: 'Coldplay in Manchester - Visual treats and infectious niceness',
        date: 'Sun 5 Jun 2016 12:08',
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
        idPost: 2,
        userName: 'Huw Stephens',
        userProfession: 'Welsh radio presenter',
        avatar: avatarHuw,
        primaryText: 'Huw Rocks with Enter Shikari',
        date: 'Wed 16 Nov 2016 22:00',
        overlayTitle: 'Don\'t get lost in the wires, Rou!',
        overlaySubtitle: 'Enter Shikari in the Live Lounge',
        featuredImg: imageEnterShikari,
        cardText: 'Enter Shikari are in the Radio 1 Live Lounge for a special performance ahead of Radio 1 Rocks! ' +
        'There\'s also new music from Laura Welsh and Swim Deep!',
        views: '156',
    },
    {
        idPost: 3,
        userName: 'Dev',
        userProfession: 'British actor, radio presenter and DJ',
        avatar: avatarDev,
        primaryText: 'Nina Nesbitt in the Live Lounge',
        date: 'Sun 4 Dec 2016 6:00',
        overlayTitle: 'Special Sunday',
        overlaySubtitle: 'From Scotland with love',
        featuredImg: imageNinaNesbitt,
        cardText: 'We had a very special Sunday Live Lounge with Scottish sweetheart Nina Nesbitt. Dev chose a good ' +
        'day to sit in for Huw!',
        views: '367',
    }
];

class CardsPreview extends Component {
    handleClick(card) {
        this.props.changeSelectedCard(card);
    }

    render() {
        return (
            <List >
                <Subheader>Today</Subheader>
                {this.props.cardsPreviewData.map((card) => (
                    <ListItem
                        key={card.idPost}
                        id={card.idPost}
                        onClick={this.handleClick.bind(this, card)}
                        className={this.props.isSelected ? s.cardSelected : null}
                        leftAvatar={<Avatar src={card.avatar} />}
                        rightIconButton={rightIconMenu}
                        title={card.userName}
                        primaryText={card.primaryText}
                        secondaryText={
                            <p>
                                <span style={{fontStyle: 'italic'}}>{card.date}</span>

                            </p>
                        }
                        secondaryTextLines={2}
                    />
                ))}
                <Divider inset={true} />

            </List>
        )
    }
}

class ReadingList extends Component {

    state = {
        cards: cardsData,
        selectedCard: 1,
    };

    changeSelectedCard = (card) => {
        this.setState({ selectedCard: card.idPost });
    };



    render() {

        const selectedId = this.state.selectedCard;
        let fullPost;
        cardsData.forEach(function (item) {
            if (item.idPost == selectedId) {
                const card = Object.assign({}, item);
                fullPost = (
                    <Card key={card.idPost}>
                        <CardHeader
                            title={card.userName}
                            subtitle={card.userProfession}
                            avatar={card.avatar}
                        />
                        <CardMedia
                            overlay={<CardTitle title={card.overlayTitle} subtitle={card.overlaySubtitle}/>}
                        >
                            <img src={card.featuredImg}/>
                        </CardMedia>
                        <CardTitle title={card.primaryText}/>
                        <CardText>
                            {card.cardText}
                        </CardText>

                        <Divider />

                        <CardActions>
                            <IconButton tooltip="Recommend"
                                        tooltipPosition="bottom-right">
                                <ContentForward className={s.icon}/>
                            </IconButton>
                            <Badge
                                badgeContent={card.views}
                                primary={true}
                                badgeStyle={{top: 12, right: 12}}
                            >
                                <IconButton tooltip="Views" tooltipPosition="bottom-right">
                                    <ActionVisibility />
                                </IconButton>
                            </Badge>
                        </CardActions>
                    </Card>
                )
            }

        });

        return (
            <div className={s.root}>
                <div className={s.container}>
                    <h1>Reading List</h1>

                    <Paper className={s.readingListContainer}>
                        <CardsPreview
                            selectedCard={this.state.selectedCard}
                            cardsPreviewData={this.state.cards}
                            changeSelectedCard={this.changeSelectedCard}
                        />
                    </Paper>

                    <div className={s.cardContainer}>
                        {fullPost}
                    </div>
                </div>
            </div>
        );
    }
}

ReadingList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(ReadingList);
