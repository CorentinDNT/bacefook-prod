import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/postActions";
import { isEmpty, timeStampParser } from "../../Utils/Utils";

export default function CreatePost() {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null); //image a afficher en front
    const [postVideo, setPostVideo] = useState("");
    const [file, setFile] = useState(); //fichier d'image

    const userData = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const handlePost = async () => {
        if (message || postPicture || postVideo) {
            const data = new FormData();
            data.append("posterId", userData._id);
            data.append("message", message);
            if (file) data.append("file", file);
            data.append("video", postVideo);

            await dispatch(addPost(data));
            dispatch(getPosts());
            calcelPost();
        } else alert("veuillez entrer un message");
    };

    const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        setPostVideo("");
    };

    const calcelPost = () => {
        setMessage("");
        setPostVideo("");
        setPostPicture("");
        setFile("");
    };

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);

        const handleVideo = () => {
            let findLink = message.split(" ");
            for (let i = 0; i < findLink.length; i++) {
                if (
                    findLink[i].includes("https://www.yout") ||
                    findLink[i].includes("www.yout")
                ) {
                    let embed = findLink[i].replace("watch?v=", "embed/");
                    setPostVideo(embed.split("&")[0]);
                    findLink.splice(i, 1);
                    setMessage(findLink.join(" "));
                    setPostPicture("");
                }
            }
        };

        handleVideo();
    }, [userData, message, postVideo]);

    return (
        <div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <div className="data">
                        <p>
                            <span>
                                {userData.following
                                    ? userData.following.length
                                    : 0}
                            </span>{" "}
                            Abonnement{userData.following.length > 1 ? "s" : ""}
                        </p>
                        <p>
                            <span>
                                {userData.followers
                                    ? userData.followers.length
                                    : 0}
                            </span>{" "}
                            Abonné{userData.followers.length > 1 ? "s" : ""}
                        </p>
                    </div>
                    <NavLink exact to="/profil">
                        <div className="user-info">
                            <img src={userData.picture} alt="userPict" />
                        </div>
                    </NavLink>
                    <div className="post-form">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Quelques chose a dire ?"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        {message || postPicture || postVideo.length > 20 ? (
                            <li className="card-container">
                                <div className="card-left">
                                    <img src={userData.picture} alt="UserPic" />
                                </div>
                                <div className="card-right">
                                    <div className="card-header">
                                        <h3>{userData.pseudo}</h3>
                                        <span>
                                            {timeStampParser(Date.now())}
                                        </span>
                                    </div>
                                    <p>{message}</p>
                                    <img src={postPicture} alt="" />
                                    {postVideo && (
                                        <iframe
                                            src={postVideo}
                                            frameborder="0"
                                            allow="
                                            accelerometer; 
                                            autoplay; 
                                            clipboard-write; 
                                            encrypted-media;
                                            gyroscope; 
                                            picture-in-picutre"
                                            allowFullScreen
                                            title={postVideo}
                                        ></iframe>
                                    )}
                                </div>
                            </li>
                        ) : null}
                        <div className="footer-form">
                            <div className="icon">
                                {isEmpty(postVideo) && (
                                    <>
                                        <img
                                            src="./img/icons/picture.svg"
                                            alt=""
                                        />
                                        <input
                                            type="file"
                                            id="file-upload"
                                            name="file"
                                            accept=".jpg, .png, .jpeg"
                                            onChange={(e) => handlePicture(e)}
                                        />
                                    </>
                                )}
                                {postVideo && (
                                    <button onClick={() => setPostVideo("")}>
                                        Supprimer la vidéo
                                    </button>
                                )}
                            </div>
                            <div className="btn-send">
                                {message ||
                                postPicture ||
                                postVideo.length > 20 ? (
                                    <button
                                        className="cancel"
                                        onClick={calcelPost}
                                    >
                                        Annuler le post ...
                                    </button>
                                ) : null}
                                <button className="send" onClick={handlePost}>
                                    Poster !
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
