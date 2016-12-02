import React, { PropTypes } from 'react';
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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import imagePhotoOfTheDay from './images/manchester.jpg';

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

const rightActionsItems = (
    <IconButton>
        <ContentForward/>
        <ActionDelete/>
    </IconButton>
);



function ReadingList ({ title }) {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <h1>{title}</h1>

                <Paper className={s.readingListContainer}>
                    <List>
                        <Subheader>Today</Subheader>
                        <ListItem
                            leftAvatar={<Avatar src={avatarChris} />}
                            rightIconButton={rightIconMenu}
                            primaryText="Coldplay in Manchester - Visual treats and infectious
                         niceness"
                            secondaryText={
                                <p>
                                    <span style={{fontStyle: 'italic'}}>Sun 5 Jun 2016 12:08</span>

                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true} />
                        <ListItem
                            leftAvatar={<Avatar src={avatarHuw} />}
                            rightIconButton={rightIconMenu}
                            primaryText="Huw live from NYC - Day 3"
                            secondaryText={
                                <p>
                                    <span style={{fontStyle: 'italic'}}>Wed 16 Nov 2016 22:00</span>

                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true} />

                        <Subheader>Yesterday</Subheader>
                        <Card>
                            <CardHeader
                                title="Coldplay in Manchester - Visual treats and infectious
                         niceness"
                                subtitle="Sun 5 Jun 2016 12:08"
                                avatar={<Avatar src={avatarChris}/>}
                            />
                            <CardActions>
                                <IconButton tooltip="Recommend"
                                            tooltipPosition="bottom-right">
                                    <ContentForward className={s.icon} />
                                </IconButton>
                                <IconButton tooltip="Remove from Reading list"
                                            tooltipPosition="bottom-right">
                                    <ActionDelete className={s.icon} />
                                </IconButton>
                            </CardActions>
                        </Card>
                        <Card>
                            <CardHeader
                                title="Huw live from NYC, Day 3"
                                subtitle="Wed 16 Nov 2016 22:00"
                                avatar={<Avatar src={avatarHuw} />}
                            />
                            <CardActions>
                                <IconButton tooltip="Recommend"
                                            tooltipPosition="bottom-right">
                                    <ContentForward className={s.icon} />
                                </IconButton>
                                <IconButton tooltip="Remove from Reading list"
                                            tooltipPosition="bottom-right">
                                    <ActionDelete className={s.icon} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </List>
                </Paper>

                <div className={s.cardContainer}>
                    <Card>
                        <CardHeader
                            title="Chris Martin"
                            subtitle="Singer, songwriter, record producer"
                            avatar= {avatarChris}
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
                            <IconButton tooltip="Recommend"
                                        tooltipPosition="bottom-right">
                                <ContentForward className={s.icon} />
                            </IconButton>
                            <Badge
                                badgeContent={105}
                                primary={true}
                                badgeStyle={{top: 12, right: 12}}
                            >
                                <IconButton tooltip="Views" tooltipPosition="bottom-right">
                                    <ActionVisibility />
                                </IconButton>
                            </Badge>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}

ReadingList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(ReadingList);