import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Switch, Route, Redirect } from 'react-router-dom';
import {withRouter} from "react-router";

import SideBarMenu from './components/SideBarMenu';
import Library from './components/Library';
import Profile from './components/Profile';
import Login from './components/Login';

class App extends Component {
  static styles = theme => ({
    root: {
      // marginTop: theme.spacing.unit * 3,
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      authenticated: false,
    }
  }

  toggleSideBarMenu() {
    console.log('toggleSideBarMenu');
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  login(){
    console.log('history1111: ', this.props.history);
    this.setState({
      authenticated: true
    });

    this.props.history.push('/profile');

  }

  logout() {
    this.setState({
      authenticated: false
    });
  }

  render() {
    const {classes} = this.props;
    const isAuthenticated = this.state.authenticated;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              className={classes.menuButton} 
              color="contrast" 
              aria-label="Menu"
              onClick={this.toggleSideBarMenu.bind(this)}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              My Library
            </Typography>
            {
              !isAuthenticated ? (<Button color="contrast" onClick={this.login.bind(this)}>Login</Button>) : (<Button color="contrast" onClick={this.logout.bind(this)}>Logout</Button>)
            }
          </Toolbar>
        </AppBar>
        
        <SideBarMenu openMenu={this.state.openMenu} toggleMenu={this.toggleSideBarMenu.bind(this)}/>

        <Switch>
          <Route exact path='/' component={Login}/>
          <PrivateRoute isAuthenticated={this.state.authenticated} path='/profile' component={Profile}/>
          {/* <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/> */}
        </Switch>

      </div>
    );
  }

  
}

const PrivateRoute = ({ component: Component, isAuthenticated: isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default withRouter(withStyles(App.styles)(App));
