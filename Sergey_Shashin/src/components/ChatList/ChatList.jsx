import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export class ChatList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="chatList">
        <List >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon color="primary"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" />
          </ListItem>
          <ListItem  selected>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon color="secondary"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation"/>
          </ListItem>
        </List>
      </div>
    )
  }
}