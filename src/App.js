import React, {useState} from 'react';
import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as CogIcon} from "./icons/settings.svg";
import {ReactComponent as ChevronIcon} from "./icons/arrow.svg";
import {ReactComponent as BellIcon} from "./icons/bell.svg";
import {ReactComponent as MessengerIcon} from "./icons/messenger.svg";
import {ReactComponent as CaretIcon} from "./icons/triangle.svg";
import {ReactComponent as PlusIcon} from "./icons/plus.svg";
import {ReactComponent as UserIcon} from "./icons/user.svg";
import './index.css';

function App() {
  return (
    <Navbar>
      <NavItem icon={<Logo/>}/>
      <NavItem icon={<PlusIcon/>}/>
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
  function DropdownItem(props ) {
    return(
      <a href="#" className="menu-items">
        <span className="icon-button">{props.left}</span>
        {props.children}
        <span className="icon-right">{props.right}</span>
      </a>
    );
  }
  return(
    <div className="dropdown-lists">
      <DropdownItem icon={<UserIcon/>}>My Profile</DropdownItem>
      <DropdownItem
          left = {<CogIcon/>}
          right = {<ChevronIcon/>}> Setting
      </DropdownItem>
    </div>
  );
}

export default App;
