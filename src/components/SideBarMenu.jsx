import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';

import ListMenuContent from './ListMenuContent';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class SideBarMenu extends Component {

  toggleDrawer() {
    this.props.toggleMenu();
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List><ListMenuContent/></List>
      </div>
    );

    return (
      <div>
          <Drawer open={this.props.openMenu} onRequestClose={this.toggleDrawer.bind(this)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer.bind(this)}
              onKeyDown={this.toggleDrawer.bind(this)}
            >
              {sideList}
            </div>
          </Drawer>
      </div>
    );
  }

  
}

export default withStyles(styles)(SideBarMenu);
