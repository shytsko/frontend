import { useState } from "react";
import Comment from "./Comment";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function deleteComment(commentId) {
        setComments(comments.filter((comment) => comment.id !== commentId))
    }

    return (
        <ul>
            {comments.map((comment) => <Comment comment={comment} key={comment.id} deleteComment={deleteComment} />)}
        </ul>
    );
}

export default CommentsList;