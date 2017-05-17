import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Flow.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionBook from 'material-ui/svg-icons/action/book';
import SocialShare from 'material-ui/svg-icons/social/share';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {cyan500} from 'material-ui/styles/colors';
import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';
import avatarClara from './images/clara.jpg';
import avatarChris from './images/chris.jpg';
import avatarSam from './images/mctrusty.jpg';
import imagePhotoOfTheDay from './images/manchester.jpg';
import imagePostOfTheDay from './images/catinscarf.jpg';
import UserAvatar from './../../components/UI/UserAvatar';

const actionBook = <ActionBook />,
      actionVisibility = <ActionVisibility />;

function Flow({ title }) {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.flowContainer}>
                <p className={s.flowSubHeading}>We neatly collected the issues, based on your favourites. We hope you're
                    having a great day so far.</p>
                <h2 className={s.flowHeading}>Photo Story of the Day</h2>

                <Card>
                    <CardHeader
                        title="Chris Martin"
                        subtitle="Singer, songwriter, record producer"
                        avatar={<UserAvatar />}
                        className={s.cardHeader}
                    />
                    <CardMedia
                        overlay={<CardTitle title="Call it magic" subtitle="Their love of cliches may be comical at
                        times, but band prove there are few serious challengers to their own heavyweight title" />}
                    >
                        <img src= {imagePhotoOfTheDay} />
                    </CardMedia>
                    <CardTitle title="Coldplay in Manchester" subtitle="Visual treats and infectious
                         niceness" />
                    <CardText>
                        Halfway through Coldplay’s two-hour extravaganza, the band are on the time-honoured stadium
                        rock trudge to a smaller stage in the middle of the audience, when they turn back to see the
                        image of Muhammad Ali making one of his old speeches. On the day The Greatest died, to hear
                        him say, “When I die, if there’s a heaven, I’m going to see it” provides a genuine
                        lump-in-the-throat moment. The stadium erupts with spontaneous applause; Coldplay haven’t got
                        where they are today without being able to capture personal intimacy and make it work on
                        a grand scale.
                    </CardText>

                    <Divider />

                    <CardActions>
                        <IconButton tooltip="Add to Reading List"
                                    tooltipPosition="bottom-right">
                            <ActionBook className={s.viewsIcon} color={cyan500}/>
                        </IconButton>
                        <IconButton tooltip="Views"
                                    tooltipPosition="bottom-center"
                                    className={s.postViewsIcon}
                        >
                            <ActionVisibility className={s.viewsIcon} color={cyan500}/>
                            <Badge
                                badgeContent={49}
                                primary={true}
                                className={s.badgeViews}
                            />
                        </IconButton>
                        <IconButton tooltip="Share"
                                    tooltipPosition="bottom-center">
                            <SocialShare className={s.viewsIcon} color={cyan500}/>
                        </IconButton>
                    </CardActions>
                </Card>

                <h2 className={s.flowHeading}>Track of the Day</h2>

                <Card>
                    <CardHeader
                        title="Clara Amfo"
                        subtitle="Host of Radio 1's mid-morning show, the Live Lounge"
                        avatar= {avatarClara}
                        className={s.cardHeader}
                    />
                    <CardTitle title="Freazy" subtitle="Wolf Alice" />
                    <iframe scrolling="no" allowTransparency="true"
                            src="http://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&
                                width=698&height=94&color=babad4&layout=&size=medium&type=tracks&id=102852286&app_id=1"
                            width="698" height="94"></iframe>
                    <CardText>
                        Brit Award nominees Wolf Alice, up for British Breakthrough Act, were in the Live Lounge in
                        Nov 2015 and performed their single ‘Freazy’ and a cover of Alt-J’s ‘Matilda’.
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
                                badgeContent={97}
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

                <h2 className={s.flowHeading}>Post of the Day</h2>

                <Card>
                    <CardHeader
                        title="Sam McTrusty"
                        subtitle="Twin Atlantic frontman"
                        avatar= {avatarSam}
                        className={s.cardHeader}
                    />
                    <CardMedia
                        overlay={<CardTitle title="Do you want to knit a cat a scarf?" subtitle="From magic beans to
                        knitting clubs for cats – there’s no end to the quirky and exciting things you could be doing
                        as a volunteer." />}
                    >
                        <img src= {imagePostOfTheDay} />
                    </CardMedia>
                    <CardTitle title="What is #1millionhours?" subtitle="In December 2015, we launched an ambitious
                    challenge - and we need your help to make it happen." />
                    <CardText>
                        As a society we face lots of challenges, which can sometimes seem impossible to sort out. But
                        if a lot of us do a little, we can make a difference. Just a few hours of your time can change
                        the life of someone in need.

                        #1millionhours is all about getting you to pledge your time to those that need it the most.

                        We’re hoping to inspire you to pledge towards organisations who need your time, and for you to
                        have a great experience too. We’re working with four different charities – Age UK, Barnardo’s,
                        Cancer Research UK and Oxfam and you can pledge your time with them today, or with anyone else
                        you choose.
                    </CardText>

                    <Divider />

                    <CardActions>
                        <IconButton tooltip="Add to Reading List"
                                    tooltipPosition="bottom-right">
                            <ActionBook className={s.viewsIcon}/>
                        </IconButton>
                        <IconButton tooltip="Views"
                                    tooltipPosition="bottom-center"
                                    className={s.postViewsIcon}
                        >
                            <ActionVisibility className={s.viewsIcon}/>
                            <Badge
                                badgeContent={105}
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

Flow.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Flow);
