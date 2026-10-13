import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createThread } from "../api/mockApi.js";
import { useToast } from "../context/ToastContext.jsx";

export default function CreateThreadForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { showToast } = useToast();

  // Task 3: Wire the create-thread mutation
  const mutation = useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      showToast("Thread posted!", "success");
      setTitle("");
      setBody("");
    },
    onError: (error) => {
      const message = error.response?.data?.message || "Failed to post thread";
      showToast(message, "error");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ title, body });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="section-title">New Thread</h2>
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Posting..." : "Post thread"}
      </button>
    </form>
  );
}
