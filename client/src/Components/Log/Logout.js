import React from "react";
import axios from "axios";
import cookieParser from "cookie-parser";

export default function Logout() {
    const removeCookie = (key) => {
        if (window !== "undefinded") {
            cookieParser.remove(key, { expires: 1 });
        }
    };

    const logout = async () => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie("jwt"))
            .catch((err) => console.log(err));

        window.location = "/";
    };
    return (
        <li onClick={logout}>
            <img src="./img/icons/logout.svg" alt="logout" />
        </li>
    );
}
