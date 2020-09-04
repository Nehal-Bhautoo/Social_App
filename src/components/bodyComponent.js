import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import makeStyles from "@material-ui/core/styles/makeStyles";
import "../index.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";

function Body() {
    return (
        <div className={"body"} id={"body-component"}>
            <ImgMediaCard/>
            <RecipeReviewCard/>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({

    rootFirst: {
        maxWidth: 380,
        float: "left",
        marginTop: 10,
        marginLeft: "45%",
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    root: {
        maxWidth: 345,
        float: "right",
        marginTop: 10,
        marginRight: 10,
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    media: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        height: 0,
        paddingTop: '56.25%', // 16:9
        color: "#FFFFFF",
    },
    expand: {
        transform: 'rotate(0deg)',
        color: "#FFFFFF",
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: "#FFFFFF",
    },
    avatar: {
        backgroundColor: red[500],
        color: "#FFFFFF",
    },
    header: {
        color: "#FFFFFF",
    },
}));

function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        N
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Nehal Bhautoo"
                subheader="February 24, 1997"
            />
            <CardMedia
                className={classes.media}
                title="Images"
            />
            <CardContent>
                <Typography variant="body2" color="#FFFFFF" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.rootFirst}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt=""
                    height="140"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="#FFFFFF" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Body;
