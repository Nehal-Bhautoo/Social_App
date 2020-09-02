import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as CogIcon} from "./icons/settings.svg";
import {ReactComponent as Redo} from "./icons/redo.svg";
import {ReactComponent as BellIcon} from "./icons/bell.svg";
import {ReactComponent as MessengerIcon} from "./icons/messenger.svg";
import {ReactComponent as CaretIcon} from "./icons/triangle.svg";
import {ReactComponent as PlusIcon} from "./icons/plus.svg";
import {ReactComponent as UserIcon} from "./icons/user.svg";
import {ReactComponent as Undo} from "./icons/undo.svg";
import {ReactComponent as Password} from "./icons/phishing.svg";
import {ReactComponent as Delete} from "./icons/delete.svg";
import {ReactComponent as Logout} from "./icons/logout.svg";
import {ReactComponent as Edit} from "./icons/edit.svg";
import './index.css';

function App() {
  return (
    <Navbar>
      <NavItem icon={<Logo/>}/>
      <NavItem icon={<BellIcon/>}/>
      <NavItem icon={<MessengerIcon/>}/>
      <NavItem icon={<CaretIcon/>}>
        <DropdownMenu/>
      </NavItem>
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

export default App;
