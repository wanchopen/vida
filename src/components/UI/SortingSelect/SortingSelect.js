import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SortingSelect.css';
import {grey400, cyan500} from 'material-ui/styles/colors';
import Popover from 'material-ui/Popover';
import ContentSort from 'material-ui/svg-icons/content/sort';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import DateRange from 'material-ui/svg-icons/action/date-range';
import PersonOutline from 'material-ui/svg-icons/social/people-outline';
import Divider from 'material-ui/Divider';

class SortingSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <ContentSort color={grey400}
                             className={s.sortingSelectButton}
                             onTouchTap={this.handleTouchTap} />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="By Date"
                                  className={s.sortingSelectItem}
                                  rightIcon={<DateRange className={s.sortLeftIcon} color={cyan500}/>}
                        />
                        <MenuItem primaryText="By Author"
                                  className={s.sortingSelectItem}
                                  rightIcon={<PersonOutline className={s.sortLeftIcon} color={cyan500}/>}
                        />
                        <MenuItem primaryText="By Tag"
                                  className={s.sortingSelectItem}
                                  rightIcon={<ArrowDropRight className={s.arrowRight}/>}
                                  menuItems={[
                                      <MenuItem primaryText="#concerts" className={s.sortingSelectItem}/>,
                                      <MenuItem primaryText="#live lounge" className={s.sortingSelectItem}/>,
                                      <MenuItem primaryText="#weekends radio" className={s.sortingSelectItem}/>,
                                      <Divider />,
                                      <MenuItem primaryText="Untagged items" className={s.sortingSelectItem}/>,
                                  ]}
                        />
                    </Menu>
                </Popover>
            </div>
        );
    }
}

export default withStyles(s)(SortingSelect);