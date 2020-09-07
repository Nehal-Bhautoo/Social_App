import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as CogIcon} from "./icons/settings.svg";
import {ReactComponent as Redo} from "./icons/redo.svg";
import {ReactComponent as BellIcon} from "./icons/bell.svg";
import {ReactComponent as CaretIcon} from "./icons/triangle.svg";
import {ReactComponent as PlusIcon} from "./icons/plus.svg";
import {ReactComponent as UserIcon} from "./icons/user.svg";
import {ReactComponent as Undo} from "./icons/undo.svg";
import {ReactComponent as Password} from "./icons/phishing.svg";
import {ReactComponent as Delete} from "./icons/delete.svg";
import {ReactComponent as Logout} from "./icons/logout.svg";
import {ReactComponent as Edit} from "./icons/edit.svg";
import './index.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {blue, yellow} from "@material-ui/core/colors";
import clsx from "clsx";

function App() {
  return (
    <Navbar>
        <SearchAppBar/>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar-bar">
      <ul className="nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  let [open, setOpen] = useState(false);
  return (
    <li>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(element) {
        const height = element.offsetHeight;
        setMenuHeight(height);
    }
  function DropdownItem(props) {
    return(
      <a href="#" className="menu-items" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.left}</span>
        {props.children}
        <span className="icon-right">{props.right}</span>
      </a>
    );
  }
  return(
    <div className="dropdown-lists" style={{height: menuHeight}}>
        <CSSTransition
            in={activeMenu === 'main'}
            unmountOnExit timeout={500}
            className={"menu-primary"}
            onEnter={calcHeight}>
            <div className={"menu"}>
                <DropdownItem left={<UserIcon/>}>My Profile</DropdownItem>
                <DropdownItem left={<PlusIcon/>}>Add Picture</DropdownItem>
                <DropdownItem
                    left = {<CogIcon/>}
                    right = {<Redo/>}
                    goToMenu={"settings"}> Setting
                </DropdownItem>
                <DropdownItem left={<Logout/>}>Log-out</DropdownItem>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === 'settings'}
            unmountOnExit
            timeout={500}
            className={"menu-secondary"}>
            <div className={"menu"}>
                <DropdownItem left={<Undo/>} goToMenu={"main"} />
                <DropdownItem left={<Edit/>}>Edit Profile</DropdownItem>
                <DropdownItem left={<Password/>}>Change Password</DropdownItem>
                <DropdownItem left={<Delete/>}>Deactivate Account</DropdownItem>
            </div>
        </CSSTransition>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        backgroundColor: "#242424",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textShadow: 5,
        flexGrow: 1,
        fontWeight: "bold",
        color: blue[500],
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    appbar: {
        backgroundColor: "#242424",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    shapeCircle: {
        borderRadius: '40%',
    },
    badge: {
        display: "flex",
    },
    dialog: {
        backgroundColor: "#242424",
    },
    header: {
        color: "#FFFFFF",
    },
    avatar2: {
        backgroundColor: yellow[500],
        color: "#FFFFFF",
    },
}));

function SearchAppBar() {
    const classes = useStyles();
    // const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        React App
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <NavItem icon={<Logo/>}/>
                    <NavItem icon={<BellIcon/>}/>
                    <NavItem icon={<CaretIcon/>}>
                        <DropdownMenu/>
                    </NavItem>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
