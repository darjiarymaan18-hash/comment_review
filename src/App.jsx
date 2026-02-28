import { useState } from "react";
import CommentCard from "./components/CommentCard";
import CommentForm from "./components/CommentForm";

import "./App.css";

function App() {
  const [comments, setComments] = useState([
    { id: 1, text: "Amazing Product ", status: "Pending" },
    { id: 2, text: "Not good quality ", status: "Pending" },
  ]);

  const [filter, setFilter] = useState("All");

  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      status: "Pending",
    };
    setComments([...comments, newComment]);
  };

  const updateStatus = (id, newStatus) => {
    const updated = comments.map((comment) =>
      comment.id === id ? { ...comment, status: newStatus } : comment
    );
    setComments(updated);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const filteredComments =
    filter === "All"
      ? comments
      : comments.filter((c) => c.status === filter);

  return (
    <div className="container">
      <h1>Comments Review System</h1>

      <CommentForm addComment={addComment} />

      <div className="filter-buttons">
        {["All", "Pending", "Approved", "Rejected"].map((btn) => (
          <button
            key={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="comment-list">
        {filteredComments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            updateStatus={updateStatus}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;