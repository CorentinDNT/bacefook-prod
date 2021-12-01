import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../actions/postActions";
import { UidContext } from "../AppContext";

export default function EditDeletePost({ postId, comment }) {
    const [isAuthor, setIsAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const uid = useContext(UidContext);

    const handleEdit = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(editComment(postId, comment._id, text));
            setText("");
            setEdit(false);
        }
    };

    const handleDelete = () => dispatch(deleteComment(postId, comment._id));

    useEffect(() => {
        const checkAuthor = () => {
            if (uid === comment.commenterId) setIsAuthor(true);
        };

        checkAuthor();
    }, [uid, comment.commenterId]);

    return (
        <div className="edit-comment">
            {isAuthor && edit === false && (
                <span onClick={() => setEdit(!edit)}>
                    <img
                        src="./img/icons/edit.svg"
                        alt="editer le commentaire"
                    />
                </span>
            )}
            {isAuthor && edit && (
                <form onSubmit={handleEdit} className="edit-comment-form">
                    <label htmlFor="text" onClick={() => setEdit(!edit)}>
                        Editer
                    </label>
                    <br />
                    <input
                        type="text"
                        name="text"
                        onChange={(e) => setText(e.target.value)}
                        defaultValue={comment.text}
                    />
                    <br />
                    <div className="btn">
                        <span
                            onClick={() => {
                                if (
                                    window.confirm(
                                        "voulez-vous supprimer ce commentaire ?"
                                    )
                                )
                                    handleDelete();
                            }}
                        >
                            <img
                                src="./img/icons/trash.svg"
                                alt="supprimer commentaire"
                            />
                        </span>
                        <input
                            type="submit"
                            value="Validez les modifications"
                        />
                    </div>
                </form>
            )}
        </div>
    );
}
