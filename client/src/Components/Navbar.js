import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

export default function Navbar() {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/" />
                    <div className="logo">
                        <img src="./img/icon.png" alt="logo" />
                        <h3>Bacefook</h3>
                    </div>
                </div>
                {uid ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                            <NavLink exact to="/profil">
                                <h5>Bienvenu {userData.pseudo}</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <NavLink exact to="/profil">
                            <img src="./img/icons/login.svg" alt="login" />
                        </NavLink>
                    </ul>
                )}
            </div>
        </nav>
    );
}
