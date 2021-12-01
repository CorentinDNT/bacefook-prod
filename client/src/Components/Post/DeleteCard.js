import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/postActions";

export default function DeleteCard(props) {
    const dispatch = useDispatch();

    const deleteQuote = () => dispatch(deletePost(props.id));
    return (
        <div
            onClick={() => {
                if (window.confirm("voulez-vous supprimer vôtre post ?"))
                    deleteQuote();
            }}
        >
            <img src="./img/icons/trash.svg" alt="" />
        </div>
    );
}
