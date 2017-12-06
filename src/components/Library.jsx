import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import fireBaseRef from '../firebase/connection';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    componentDidMount() {
        fireBaseRef.child('users/jtamayo/books').once('value').then((snapshot) => {
            this.setState({
                books: snapshot.val()
            });
        }, (e) => {
            console.log('Unable to fetch value', e);
        });
    }

    displayBookContainer() {
        const { classes } = this.props;
        
        return this.state.books.map((book) => {
            return(
                <Card className={classes.card} key={book.id}>
                    {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    /> */}
                    <CardContent className={classes.cardContent}>
                        <Typography type="headline" component="h2">
                            {book.title}
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            );
        })
    }

    render(){

        return(
            <div>
                <h1>Library Component</h1>
                {this.displayBookContainer()}
            </div>
        );
    }
}

export default withStyles(styles)(Library);