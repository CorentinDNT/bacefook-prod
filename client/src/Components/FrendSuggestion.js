import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils/Utils";
import FollowHandler from "./Profil/FollowHandler";

export default function FrendSuggestion() {
    const [isLoading, setIsLoading] = useState(true);
    const [playOneTime, setPlayOneTime] = useState(true);
    const [friendsSuggest, setFriendsSuggest] = useState([]);

    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);

    useEffect(() => {
        const notFriended = () => {
            let array = [];
            usersData.map((user) => {
                if (
                    user._id !== userData._id &&
                    !user.followers.includes(userData._id)
                )
                    return array.push(user._id);
            });
            array.sort(() => 0.5 - Math.random());
            setFriendsSuggest(array);
            array.length = 4;
        };

        if (playOneTime && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
            notFriended();
            setIsLoading(false);
            setPlayOneTime(false);
        }
    }, [userData, usersData]);

    return (
        <div className="get-friends-container">
            <h4>Suggestions</h4>
            {isLoading ? (
                <div className="icon">
                    <i className="fas fa-spinner fa-pulse"></i>
                </div>
            ) : (
                <ul>
                    {friendsSuggest &&
                        friendsSuggest.map((user) => {
                            for (let i = 0; i < usersData.length; i++) {
                                if (user === usersData[i]._id) {
                                    return (
                                        <li className="user-hint" key={user}>
                                            <img
                                                src={usersData[i].picture}
                                                alt="user-pic"
                                            />
                                            <p>{usersData[i].pseudo}</p>
                                            <FollowHandler
                                                idToFollow={usersData[i]._id}
                                                type={"suggestion"}
                                            />
                                        </li>
                                    );
                                }
                            }
                        })}
                </ul>
            )}
        </div>
    );
}
