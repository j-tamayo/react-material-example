import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    formControl: {
        width: '100%',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        textAlign: 'center',
    },
    button: {
        margin: 'auto',
    },
});

class Login extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){
        const { classes } = this.props;

        return(
            <div>
                <Grid container className={classes.root} spacing={16} justify="center">
                    <Grid key={1} item xs={4}>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography type="headline" component="h3" align="center">
                                Login
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="userName-simple">Username</InputLabel>
                                <Input id="userName-simple" value={this.state.userName} onChange={this.handleChange('userName')} />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
                            </FormControl>
                            <div className={classes.buttonContainer}>
                                <Button raised color="primary" className={classes.button}>
                                    Login
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        state
    }
}

export default withStyles(styles)(connect(mapStateToProps, null)(Login));