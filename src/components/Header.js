import React from "react";
import "../style/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import TelegramIcon from "@material-ui/icons/Telegram";
import IconButton from "@material-ui/core/IconButton";
import tinderLogo from "../img/tinderLogo.png";


function Header(props) {
    return (
        <div className={'header'}>
            <IconButton><PersonIcon fontSize="large" className="header__icon"/></IconButton>
            <img className="header__logo" src={tinderLogo} alt=""/>
            <IconButton fontSize="large"><TelegramIcon fontSize="large" className="header__icon"/></IconButton>
        </div>
    );
}

export default Header;

