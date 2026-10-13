import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/mockApi.js";
import { useToast } from "../context/ToastContext.jsx";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToast();

  // Task 4: Wire the login mutation
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      showToast("Welcome back!", "success");
      setUsername("");
      setPassword("");
    },
    onError: (error) => {
      const message = error.response?.data?.message || "Login failed";
      showToast(message, "error");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate({ username, password });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="section-title">Log in</h2>
      <p className="muted">Try ada / password for success.</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
