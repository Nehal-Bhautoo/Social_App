import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../index.css";

function FooterNav() {
    return (
        <div className={"footer"}>
            <LabelBottomNavigation/>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 0,
        width: "inherit",
        height: "inherit",
        backgroundColor: "#242424",
    },
});

function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recent');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Recent" value="recent" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Git Repo" value="Git" icon={<GitHubIcon />} />
        </BottomNavigation>
    );
}

export default FooterNav;
