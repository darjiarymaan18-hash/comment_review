import "./Comment.css";

function CommentCard({ comment, updateStatus, deleteComment }) {
  return (
    <div className={`card ${comment.status.toLowerCase()}`}>
      <p>{comment.text}</p>
      <h4>Status: {comment.status}</h4>

      {comment.status === "Pending" && (
        <div className="btn-group">
          <button onClick={() => updateStatus(comment.id, "Approved")}>
            Approve
          </button>
          <button onClick={() => updateStatus(comment.id, "Rejected")}>
            Reject
          </button>
        </div>
      )}

      <button className="delete" onClick={() => deleteComment(comment.id)}>
        Delete
      </button>
    </div>
  );
}

export default CommentCard;