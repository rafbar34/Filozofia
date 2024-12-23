import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../data/firebase";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Fetch all posts from Firestore on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(data);
      } catch (error) {
        console.error("Błąd podczas fetchowania postów:", error);
      }
    };
    fetchPosts();
  }, []);

  // Add a new post to Firestore
  const handleAddPost = async () => {
    if (!newTitle || !newContent) return;

    try {
      await addDoc(collection(db, "posts"), {
        title: newTitle,
        content: newContent,
        comments: [],
        createdAt: serverTimestamp(),
      });
      setNewTitle("");
      setNewContent("");

      // Re-fetch posts or optimistically update the state
      const snapshot = await getDocs(collection(db, "posts"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    } catch (error) {
      console.error("Błąd podczas dodawania nowego postu:", error);
    }
  };

  // Add a comment to a post by ID
  const handleAddComment = async (postId, commentText) => {
    if (!commentText) return;
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        comments: arrayUnion(commentText),
      });
      // Update state so the UI reflects the new comment
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, commentText] }
            : post
        )
      );
    } catch (error) {
      console.error("Błąd podczas dodawania komentarza:", error);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 40, // top padding for breathing room
      }}
    >
      {/* Main heading */}
      <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Blog
      </div>

      {/* Main container/card */}
      <div
        style={{
          background: "#e3f2fd",
          minHeight: "60%",
          width: "50%",
          borderRadius: 8,
          padding: 20,
          border: "1px solid rgba(44, 62, 80, 0.5)",
          marginBottom: 40,
        }}
      >
        {/* Add New Post Form */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ margin: 0, marginBottom: 10 }}>Dodaj nowy post</h3>

          {/* Title Input */}
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                fontWeight: 500,
                marginBottom: 4,
                fontSize: "1rem",
              }}
            >
              Tytuł:
            </label>
            <input
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: 4,
                padding: "8px",
                outline: "none",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          {/* Content Textarea */}
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                fontWeight: 500,
                marginBottom: 4,
                fontSize: "1rem",
              }}
            >
              Treść:
            </label>
            <textarea
              style={{
                border: "1px solid #ccc",
                borderRadius: 4,
                padding: "8px",
                outline: "none",
                fontSize: "1rem",
                boxSizing: "border-box",
                height: "120px"
              }}
              rows="3"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#2c3e50",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={handleAddPost}
          >
            Dodaj post
          </button>
        </div>

        {[...posts]
          .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds)
          .map((post) => (
            <BlogPost key={post.id} post={post} onAddComment={handleAddComment} />
          ))}
      </div>
    </div>
  );
};

const BlogPost = ({ post, onAddComment }) => {
  const { id, title, content, comments = [] } = post;
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    onAddComment(id, newComment);
    setNewComment("");
  };

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(44, 62, 80, 0.2)",
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
      }}
    >
      <h2
        style={{
          margin: "0 0 10px 0",
          fontSize: 20,
          color: "#2c3e50",
        }}
      >
        {title}
      </h2>
      <p style={{ margin: "0 0 20px 0", lineHeight: 1.5 }}>{content}</p>

      {comments.length > 0 ? (
        <ul
          style={{
            listStyleType: "circle",
            paddingLeft: 20,
            marginBottom: 20,
          }}
        >
          {[...comments]
            .slice()
            .reverse()
            .map((comment, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {comment}
              </li>
            ))}
        </ul>
      ) : (
        <div style={{ marginBottom: 20, fontStyle: "italic" }}>
          Brak komentarzy.
        </div>
      )}

      {/* Add comment */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          style={{
            fontWeight: 500,
            fontSize: "1rem",
          }}
        >
          Dodaj komentarz:
        </label>
        <input
          style={{
            marginLeft: 10,
            width: "60%",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "6px 8px",
            outline: "none",
            fontSize: "1rem",
          }}
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          style={{
            marginLeft: 10,
            padding: "6px 16px",
            backgroundColor: "#2980b9",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={handleCommentSubmit}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};
