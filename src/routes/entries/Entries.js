import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Entries.css';
import cx from 'classnames';
import SortingSelect from './../../components/UI/SortingSelect';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ContentSort from 'material-ui/svg-icons/content/sort';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import ContentForward from 'material-ui/svg-icons/content/forward';
import SocialShare from 'material-ui/svg-icons/social/share';
import avatarChris from './images/chris.jpg';
import avatarEd from './images/ed_sheeran.jpeg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import imageManchester from './images/manchester.jpg';
import imageEnterShikari from './images/entershikari.jpg';
import imageNinaNesbitt from './images/ninanesbitt.jpg';
import imageWolfAlice from './images/wolfalice.jpg';
import imageGordonLewitt from './images/gordonlewitt.jpg';

const cardsData = [
    {
        idPost: 1,
        userName: 'Ed Sheeran',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarEd,
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
        userName: 'Ed Sheeran',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarEd,
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
        userName: 'Ed Sheeran',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarEd,
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
        userName: 'Ed Sheeran',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarEd,
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
        userName: 'Ed Sheeran',
        userProfession: 'British singer, songwriter, record producer',
        avatar: avatarEd,
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

    >
        <MoreVertIcon className={s.cardMenuIcon} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        animated={false}
    >
        <MenuItem leftIcon={<ContentForward className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem}>Recommend</MenuItem>
        <MenuItem leftIcon={<SocialShare className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem}>Share</MenuItem>
        <MenuItem leftIcon={<ActionDelete className={s.menuIcon} color={cyan500}/>} className={s.rightMenuItem}>Move to Trash</MenuItem>
    </IconMenu>
);

class CardsPreview extends Component {

    changeSelectedCard = (card) => {
        this.props.changeSelectedCard(card);
    };
    showFilter = () => {
        this.props.showFilter();
    };

    render() {
        return (
            <List className={s.cardsList}>
                <Subheader className={s.cardsListSubHeading}>
                    <SortingSelect />

                </Subheader>
                {this.props.cardsPreviewData.map((card) => (
                    <ListItem
                        key={card.idPost}
                        id={card.idPost}
                        className={s.card}
                        leftAvatar={<Avatar src={card.avatar} className={s.avatar}/>}
                        rightIconButton={rightIconMenu}
                        title={card.userName}
                        primaryText={
                            <div className={s.cardHeading} onClick={this.changeSelectedCard.bind(this, card)}>
                            <span>
                                {card.primaryText}
                            </span>
                            </div>
                        }
                        secondaryText={
                            <div style={{
                                height: '24px',
                            }}>
                            <span>
                                {card.postTheme}
                            </span>
                            </div>
                        }
                        secondaryTextLines={2}
                    />
                ))}
            </List>
        );
    }

}

class Entries extends Component {
    state = {
        cards: cardsData,
        selectedCard: 1,
        checkedCards: [],
        isVisible: false,
    };

    changeSelectedCard = (card) => {
        this.setState({
            selectedCard: card.idPost,
        });
    };

    showFilter = () => {
        this.setState({
            isVisible: true,
        });
    };

    render() {
        const selectedId = this.state.selectedCard;
        let fullPost;
        cardsData.forEach(function (item) {
            if (item.idPost == selectedId) {
                const card = Object.assign({}, item);
                fullPost = (
                    <Card key={card.idPost} className={s.fullPost}>
                        <CardHeader
                            title={card.userName}
                            subtitle={card.userProfession}
                            avatar={card.avatar}
                            className={s.cardHeader}
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
                                <ContentForward color={grey400} className={s.viewsIcon}/>
                            </IconButton>
                            <IconButton tooltip="Share"
                                        tooltipPosition="bottom-center">
                                <SocialShare color={grey400} className={s.viewsIcon}/>
                            </IconButton>
                            <IconButton tooltip="Move to Trash"
                                        tooltipPosition="bottom-center">
                                <ActionDelete color={grey400} className={s.viewsIcon}/>
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
                            showFilter={this.showFilter}
                            isVisibleFilter={this.state.isVisible}
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

Entries.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Entries);
