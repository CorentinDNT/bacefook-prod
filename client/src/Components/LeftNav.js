import React from "react";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink exact to="/" activeClassName="active-left-nav">
                        <img src="./img/icons/home.svg" alt="home" />
                    </NavLink>
                    <br />
                    <NavLink
                        exact
                        to="/trending"
                        activeClassName="active-left-nav"
                    >
                        <img src="./img/icons/rocket.svg" alt="trending" />
                    </NavLink>
                    <br />
                    <NavLink
                        exact
                        to="/profil"
                        activeClassName="active-left-nav"
                    >
                        <img src="./img/icons/user.svg" alt="profil" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
