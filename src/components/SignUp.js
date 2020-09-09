import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {blue} from "@material-ui/core/colors";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
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
            outlined: {
                color: "#FFFFFF",
            }
        },
        MuiFormControl: {
            root: {
                borderBottomColor: "#FFFFFF",
            },
        },
    },
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '30%',
        paddingRight: '30%',
        backgroundColor: "#242426",
        height: "100vh",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: "#FFFFFF",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    headerTitle: {
        color: blue[500],
    },
}));

function SignUp() {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <ThemeProvider theme={theme}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.headerTitle} component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <ThemeProvider theme={theme}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </form>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default SignUp;
