import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ReadingList.css';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentForward from 'material-ui/svg-icons/content/forward';
import ContentSort from 'material-ui/svg-icons/content/sort';
import avatarChris from './images/chris.jpg';
import avatarHuw from './images/huw.jpg';
import avatarDev from './images/dev.jpg';
import avatarAlice from './images/alice.jpg';
import avatarClara from './images/clara.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import imageManchester from './images/manchester.jpg';
import imageEnterShikari from './images/entershikari.jpg';
import imageNinaNesbitt from './images/ninanesbitt.jpg';
import imageWolfAlice from './images/wolfalice.jpg';
import imageGordonLewitt from './images/gordonlewitt.jpg';



const cardsData = [
    {
        idPost: 1,
        userName: 'Chris Martin',
        userProfession: 'British singer, songwriter, record producer',
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
    {
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
    {
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
    },
    {
        idPost: 5,
        userName: 'Alice Levine',
        userProfession: 'English television and radio presenter',
        avatar: avatarAlice,
        primaryText: 'Alice Levine with Joseph Gordon-Levitt',
        date: 'Tue 23 Jun 2015 10:00',
        postTheme: 'Weekends radio show',
        overlayTitle: 'Saturday\'s Special',
        overlaySubtitle: 'Alice chats Joseph Gordon-Levitt about the new Edward Snowden film.',
        featuredImg: imageGordonLewitt,
        cardText: '\'It\'s made me think a bit about how it all works\' Joseph Gordon-Levitt on the new Edward Snowden ' +
        'film \'We\'re the first generation to get this incredible technology.\' Joseph Gordon-Levitt talks to ' +
        'Alice Levine about the new Edward Snowden film, working with Oliver Stone, hackers and meeting Snowden ' +
        'himself.',
        views: '763',
    },
];

const iconButtonElement = (
    <IconButton
        touch={true}
        className={s.cardMenuIcon}
    >
        <MoreVertIcon color={cyan500} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu
        iconButtonElement={iconButtonElement}
    >
        <MenuItem leftIcon={<ContentForward/>}>Recommend</MenuItem>
        <MenuItem leftIcon={<ContentSort/>}>Sort By</MenuItem>
        <MenuItem leftIcon={<ActionDelete/>}>Delete</MenuItem>
    </IconMenu>
);

const styles = {
    color: 'green',
};

class SelectToSort extends Component {

    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <SelectField
                value={this.state.value}
                onChange={this.handleChange}
                className={s.sortingSelect}
                autoWidth={false}
            >
                <MenuItem value={1} primaryText="By date" />
                <MenuItem value={2} primaryText="By theme" />
                <MenuItem value={3} primaryText="All issues" />
            </SelectField>
        );
    }
}

class CardsPreview extends Component {
    handleClick = (card) => {
        this.props.changeSelectedCard(card);
    };

    render() {

        return (
            <List >
                <Subheader className={s.cardsListSubHeading}>
                    <SelectToSort/>

                </Subheader>
                {this.props.cardsPreviewData.map((card) => (
                    <ListItem
                        key={card.idPost}
                        id={card.idPost}
                        className={s.card}
                        leftAvatar={<Avatar src={card.avatar} />}
                        rightIconButton={rightIconMenu}
                        title={card.userName}
                        primaryText={
                            <div className={s.cardHeading} onClick={this.handleClick.bind(this, card)}>
                                <span>
                                    {card.primaryText}
                                </span>
                            </div>
                        }
                        secondaryText={
                            <div style={{
                                height: '24px',
                            }}>
                                <span style={{
                                    fontStyle: 'italic',
                                }}
                                >
                                    {card.postTheme}
                                </span>
                            </div>
                        }
                        secondaryTextLines={2}
                    />
                ))}
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
        this.setState({
            selectedCard: card.idPost,
        });
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
                                <ContentForward className={s.viewsIcon}/>
                            </IconButton>
                            <IconButton tooltip="Views"
                                        tooltipPosition="bottom-center"
                                        className={s.postViewsIcon}
                            >
                                <ActionVisibility className={s.viewsIcon}/>
                                <Badge
                                    badgeContent={card.views}
                                    primary={true}
                                    className={s.badgeViews}
                                />
                            </IconButton>
                        </CardActions>
                    </Card>
                )
            }

        });

        return (
            <div className={s.root}>
                <div className={s.container}>
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
