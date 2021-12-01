import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/userActions";
import { isEmpty } from "../../Utils/Utils";

export default function FollowHandler(props) {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(followUser(userData._id, props.idToFollow));
        setIsFollowed(true);
    };

    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, props.idToFollow));
        setIsFollowed(false);
    };

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(props.idToFollow))
                setIsFollowed(true);
            else setIsFollowed(false);
        }
    }, [userData, props.idToFollow]);

    return (
        <>
            {isFollowed && !isEmpty(userData) && (
                <span onClick={handleUnfollow}>
                    {props.type == "suggestion" && (
                        <button className="unfollow-btn">Abonné</button>
                    )}
                    {props.type == "card" && (
                        <img src="./img/icons/checked.svg" alt="checked icon" />
                    )}
                </span>
            )}
            {isFollowed === false && !isEmpty(userData) && (
                <span onClick={handleFollow}>
                    {props.type == "suggestion" && (
                        <button className="follow-btn">Suivre</button>
                    )}
                    {props.type == "card" && (
                        <img src="./img/icons/check.svg" alt="check icon" />
                    )}
                </span>
            )}
        </>
    );
}
