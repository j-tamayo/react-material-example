import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {withRouter} from "react-router";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    },
});

class ListMenuContent extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = {
            left: true,
        }
    }

    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
            <List>
              <ListItem button onClick={() => this.props.history.push('/')}>
                <ListItemIcon>
                  <i className="material-icons">local_library</i>
                </ListItemIcon>
                <ListItemText primary="Library" />
              </ListItem>
              <ListItem button onClick={() => this.props.history.push('/profile')}>
                <ListItemIcon>
                  <i className="material-icons">account_circle</i>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </List>
          </div>
        );
    }
    
  }
  
  export default withRouter(withStyles(styles)(ListMenuContent));