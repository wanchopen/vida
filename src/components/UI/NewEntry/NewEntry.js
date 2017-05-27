import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewEntry.css';
import Dialog from 'material-ui/Dialog';
import {grey400, cyan500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color';
import EditorPublish from 'material-ui/svg-icons/editor/publish';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import TextField from 'material-ui/TextField';

class NewEntry extends Component {
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
            <IconButton tooltip="Publish"
                        tooltipPosition="bottom-center"
                        onTouchTap={this.handleClose}>
                <EditorPublish color={cyan500} className={s.actionIcon}/>
            </IconButton>,
            <IconButton tooltip="Save as a draft"
                        tooltipPosition="bottom-center"
                        onTouchTap={this.handleClose}>
                <ContentDrafts color={grey400} className={s.actionIcon}/>
            </IconButton>
        ];

        return (
            <div>
                <IconButton tooltip="Write an Entry"
                            tooltipPosition="bottom-right"
                            onTouchTap={this.handleOpen}>
                    <EditorBorderColor color={grey400} className={s.viewsIcon}/>
                </IconButton>
                <Dialog
                    title="Create new entry"
                    modal={false}
                    open={this.state.open}
                    actions={actions}
                    autoScrollBodyContent={true}
                    autoDetectWindowHeight={true}
                    actionsContainerClassName={s.actionsContainer}
                    onRequestClose={this.handleClose}
                    className={s.dialogWindow}
                >
                    <div className={s.entryFormContainer}>
                        <TextField
                            hintText="Enter title for your entry"
                            floatingLabelText="Title"
                        />
                        <TextField
                            hintText="Enter text for your entry"
                            floatingLabelText="Text"
                            multiLine={true}
                            rows={2}
                        />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(s)(NewEntry);