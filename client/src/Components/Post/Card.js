import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, updatePost } from "../../actions/postActions";
import { dateParser, isEmpty } from "../../Utils/Utils";
import FollowHandler from "../Profil/FollowHandler";
import CardComment from "./CardComment";
import DeleteCard from "./DeleteCard";
import LikeButton from "./LikeButton";

export default function Card(props) {
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    }, [usersData]);

    const updateItem = () => {
        if (textUpdate) {
            dispatch(updatePost(props.post._id, textUpdate));
        }
        setIsUpdated(false);
    };
    return (
        <li className="card-container" key={props.post._id}>
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className="card-left">
                        <img
                            src={
                                !isEmpty(usersData[0]) &&
                                usersData
                                    .map((user) => {
                                        if (user._id === props.post.posterId)
                                            return user.picture;
                                        else return null;
                                    })
                                    .join("")
                            }
                            alt="poster-pic"
                        />
                    </div>
                    <div className="card-right">
                        <div className="card-header">
                            <div className="pseudo">
                                <h3>
                                    {!isEmpty(usersData[0]) &&
                                        usersData.map((user) => {
                                            if (
                                                user._id === props.post.posterId
                                            )
                                                return user.pseudo;
                                            else return null;
                                        })}
                                </h3>
                                {props.post.posterId !== userData._id && (
                                    <FollowHandler
                                        idToFollow={props.post.posterId}
                                        type={"card"}
                                    />
                                )}
                            </div>
                            <span>{dateParser(props.post.createdAt)}</span>
                        </div>
                        {isUpdated === false && <p>{props.post.message}</p>}
                        {isUpdated && (
                            <div className="update-post">
                                <textarea
                                    defaultValue={props.post.message}
                                    onChange={(e) =>
                                        setTextUpdate(e.target.value)
                                    }
                                />
                                <div className="button-container">
                                    <button
                                        className="btn"
                                        onClick={updateItem}
                                    >
                                        Valider modifications
                                    </button>
                                </div>
                            </div>
                        )}
                        {props.post.picture && (
                            <img
                                src={props.post.picture}
                                alt="photo de poste"
                                className="card-pic"
                            />
                        )}
                        {props.post.video && (
                            <iframe
                                width="500"
                                height="300"
                                allowFullScreen
                                allow="
                                accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture"
                                src={props.post.video}
                                frameBorder="0"
                                title={props.post._id}
                            ></iframe>
                        )}
                        {userData._id == props.post.posterId && (
                            <div className="button-container">
                                <div onClick={() => setIsUpdated(!isUpdated)}>
                                    <img
                                        src="./img/icons/edit.svg"
                                        alt="edit"
                                    />
                                </div>
                                <DeleteCard id={props.post._id} />
                            </div>
                        )}
                        <div className="card-footer">
                            <div className="comment-icon">
                                <img
                                    onClick={() =>
                                        setShowComments(!showComments)
                                    }
                                    src="./img/icons/message1.svg"
                                    alt="comment"
                                />
                                <span>{props.post.comments.length}</span>
                            </div>
                            <LikeButton post={props.post} />
                            <img src="./img/icons/share.svg" alt="partager" />
                        </div>
                        {showComments && <CardComment post={props.post} />}
                    </div>
                </>
            )}
        </li>
    );
}
