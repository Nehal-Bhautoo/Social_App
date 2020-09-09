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
import {blue, green, orange, purple, red, yellow} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/PersonAdd';
import makeStyles from "@material-ui/core/styles/makeStyles";
import "../index.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import DateRangeIcon from '@material-ui/icons/DateRange';
import Popover from "@material-ui/core/Popover";
import PopUpChat from "./PopUpChat";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from "@material-ui/core/InputAdornment";

function Body() {
    return (
        <div className={"body"} id={"body-component"}>
            <FriendsList/>
            <PostList/>
            <ProfileCard/>
            <CalendarCard/>
            <PopUpChat/>
        </div>
    );
}

const theme = createMuiTheme({
   overrides: {
       MuiTypography: {
            colorTextSecondary: {
                color: "#FFFFFF",
            },
       },
       MuiInputBase: {
           input: {
               color: "#FFFFFF",
           },
           formControl: {
               color: "#FFFFFF",
           },
           root: {
               color: "#FFFFFF",
           },
       },
       MuiFilledInput: {
           input: {
               color: "#FFFFFF",
           },
       },
       MuiTextField: {
           color: "#FFFFFF",
       },
       MuiInputLabel: {
           filled: {
               color: "#FFFFFF",
           },
       },
       MuiFormControl: {
           root: {
               borderBottomColor: "#FFFFFF",
           },
       },
   },
});

const useStyles = makeStyles((theme) => ({

    rootFirst: {
        maxWidth: "100%",
        float: "left",
        marginTop: "3%",
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    root: {
        maxWidth: "26%",
        float: "right",
        marginTop: 18,
        marginRight: 20,
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    calendarCard: {
        width: "26%",
        float: "right",
        marginRight: 20,
        backgroundColor: "#242426",
        color: "#FFFFFF",
        marginTop: 8,
    },
    media: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        height: 0,
        paddingTop: '56.25%', // 16:9
        color: "#FFFFFF",
    },
    expand: {
        transform: 'rotate(0deg)',
        color: theme.palette.primary,
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
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45vw',
        },
        color: "#FFFFFF",
    },
    comments: {
        marginLeft: "50px",
        marginTop: "-40px",
    },
    newContainer: {
        maxWidth: "50%",
        marginLeft: "1.5%",
        float: "left",
    },
    newPost: {
        backgroundColor: "#242426",
        color: "#FFFFFF",
    },
    postCard: {
        maxWidth: "100%",
        marginTop: 18,
    },
    textField: {
        width: "100%",
    },
    input: {
        display: 'none',
    },
    buttonUpload: {
        marginLeft: 10,
        marginTop: 10,
    },
}));

function CreatePost() {
    const classes = useStyles();

    return (
        <div className={classes.postCard}>
            <Card className={classes.newPost}>
                <ThemeProvider theme={theme}>
                    <CardHeader
                        className={classes.header}
                        title={"New Posts"}
                    />
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <TextField
                                className={classes.textField}
                                id="filled-multiline-static"
                                label="Add Comments"
                                multiline
                                rows={4}
                                variant="filled"
                            />
                        </ThemeProvider>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                className={classes.buttonUpload}>
                                Upload
                            </Button>
                        </label>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="span"
                            className={classes.buttonUpload}>
                            Post
                        </Button>
                    </CardContent>
                </ThemeProvider>
            </Card>
        </div>
    );
}

function ProfileCard() {
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
            <ThemeProvider theme={theme}>
                <CardHeader className={classes.header}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.icon}>
                            N
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon aria-describedby={id} onClick={handleClick}/>
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
            </ThemeProvider>
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

function PostList() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.newContainer}>
            <CreatePost/>
            <Card className={classes.rootFirst}>
                <CardHeader
                    className={classes.header}
                        avatar={
                            <Avatar aria-label="recipe" className={classes.addIcon}>
                                K
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon aria-describedby={id} onClick={handleClick}/>
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
                    <Button
                        size="small"
                        color="primary"
                        onClick={handleExpandClick}>
                        Comment
                        <ExpandMoreIcon
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"/>
                    </Button>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Avatar aria-label="recipe" className={classes.avatar3}>
                            D
                        </Avatar>
                        <Typography paragraph className={classes.comments}>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <form className={classes.form} noValidate autoComplete="off">
                            <ThemeProvider theme={theme}>
                                <TextField
                                    id="filled-basic"
                                    label="Add Comment"
                                    variant="filled"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    aria-label={"Send"}>
                                                    <SendIcon/>
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}/>
                            </ThemeProvider>
                        </form>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

function FriendsList() {
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
                    <IconButton aria-label="settings" onClick={CalendarCard}>
                        <DateRangeIcon />
                    </IconButton>
                }
                title="View Post By Date"
            />
        </Card>
    );
}

export default Body;
