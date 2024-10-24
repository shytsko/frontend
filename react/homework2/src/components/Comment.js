function Comment({ comment, deleteComment }) {
    return (
        <li >
            <p>{comment.text}</p>
            <button onClick={() => deleteComment(comment.id)}>Удалить</button>
        </li>
    );
}

export default Comment;