import React from "react";
import Drawer, {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Inbox, Mail} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

const DrawerNav = () => {
    return (
        <Drawer variant={'temporary'} open={true}>
            <List>
                {
                    ['Inbox', 'Starred', 'Send mail', 'Draft'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Inbox/> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    );
}

export default DrawerNav;
