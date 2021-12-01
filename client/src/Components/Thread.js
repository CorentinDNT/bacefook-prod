import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";
import { isEmpty } from "../Utils/Utils";
import Card from "./Post/Card";

export default function Thread() {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const [count, setCount] = useState(5);

    const loadMore = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >
            document.scrollingElement.scrollHeight
        ) {
            setLoadPost(true);
        }
    };

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts(count));
            setLoadPost(false);
            setCount(count + 1);
        }

        window.addEventListener("scroll", loadMore);
        return () => {
            window.removeEventListener("scroll", loadMore);
        };
    }, [loadPost]);

    return (
        <div className="thread-container">
            <ul>
                {!isEmpty(posts[0]) &&
                    posts.map((post) => {
                        return <Card post={post} key={post._id} />;
                    })}
            </ul>
        </div>
    );
}
