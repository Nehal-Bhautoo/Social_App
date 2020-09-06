import React, {useState} from 'react';
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
import {blue, green, orange, purple, red, yellow} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from "@material-ui/core/styles/makeStyles";
import "../index.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import DateRangeIcon from '@material-ui/icons/DateRange';
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import Popover from "@material-ui/core/Popover";
import {Fab} from "@material-ui/core";
import PopUpChat from "./PopUpChat";

function Body() {
    return (
        <div className={"body"} id={"body-component"}>
            <ProfileCard/>
            <ImgMediaCard/>
            <RecipeReviewCard/>
            <CalendarCard/>
            {/*<FloatingActionButton/>*/}
            <PopUpChat/>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({

    rootFirst: {
        maxWidth: "50%",
        float: "left",
        marginTop: 18,
        marginLeft: "1.5%",
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    root: {
        maxWidth: 345,
        float: "right",
        marginTop: 18,
        marginRight: 20,
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    calendarCard: {
        width: "25.5%",
        maxWidth: 345,
        float: "right",
        marginRight: 20,
        backgroundColor: "#242426",
        color: "#FFFFFF",
        marginTop: 20
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
    profileCard: {
        maxWidth: 300,
        float: "left",
        marginTop: 18,
        marginLeft: 20,
        backgroundColor: "#242426",
    },
    avatar1: {
        backgroundColor: blue[500],
        color: "#FFFFFF",
    },
    avatar2: {
        backgroundColor: yellow[500],
        color: "#FFFFFF",
    },
    avatar3: {
        backgroundColor: green[500],
        color: "#FFFFFF",
    },
    avatar4: {
        backgroundColor: purple[500],
        color: "#FFFFFF",
    },
    avatar5: {
        backgroundColor: orange[500],
        color: "#FFFFFF",
    },
    typography: {
        padding: theme.spacing(2),
    },
    addIcon: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    icon: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    floatIcon: {
        '& > *': {
            margin: theme.spacing(5),
        },
    },
}));

function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.icon}>
                        N
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon aria-describedby={id} onClick={handleClick} />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}>
                            <Button className={classes.typography}>Report</Button>
                        </Popover>
                    </IconButton>
                }
                title="Nehal Bhautoo"
                subheader="February 24, 1997"
            />
            <CardMedia
                className={classes.media}
                component={"img"}
                title="Images"
            />
            <CardContent>
                <Typography variant="body2" component="p">
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card className={classes.rootFirst}>
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.addIcon}>
                        K
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon aria-describedby={id} />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}>
                            <Button className={classes.typography}>Report</Button>
                        </Popover>
                    </IconButton>
                }
                title="Kyle Gray"
            />
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
                    <Typography variant="body2" component="p">
                        Lizards are a widespread group of squad mate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Comment
                </Button>
            </CardActions>
        </Card>
    );
}

function ProfileCard() {
    const classes = useStyles();
    return (
        <Card className={classes.profileCard}>
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        N
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="Nehal Bhautoo"
                subheader="February 24, 1997"
            />
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar1}>
                        K
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="Kyle Gray"
                subheader="February 24, 1997"
            />
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar2}>
                        P
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="Emily Prentice"
                subheader="February 24, 1997"
            />
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar3}>
                        D
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="Derick Morgan"
                subheader="February 24, 1997"
            />
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar4}>
                        D
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="David Rossi"
                subheader="February 24, 1997"
            />
            <CardHeader className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar5}>
                        JJ
                    </Avatar>
                }
                action={
                    <Tooltip title={"Add Friend"}>
                        <IconButton aria-label="add">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                }
                title="Jennifer Juereau"
                subheader="February 24, 1997"
            />
        </Card>
    );
}

function CalendarCard() {
    const classes = useStyles();
    return(
        <Card className={classes.calendarCard}>
            <CardHeader className={classes.header}
                action={
                    <IconButton aria-label="settings">
                        <DateRangeIcon onClick={OpenCalendar} />
                    </IconButton>
                }
                title="View Post By Date"
            />
        </Card>
    );
}

function OpenCalendar() {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                fullWidth
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                orientation="landscape"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps = {{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

function FloatingActionButton() {
    const classes = useStyles();
    return (
        <div className={classes.floatIcon}>
            <Fab color={"primary"} aria-label={"Add"}>
                <AddIcon/>
            </Fab>
        </div>
    );
}

export default Body;
