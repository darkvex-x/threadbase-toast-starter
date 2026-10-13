import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/mockApi.js";
import { useToast } from "../context/ToastContext.jsx";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      // Task 4: show success toast
      setUsername("");
      setPassword("");
    },
    onError: (error) => {
      // Task 4: show error toast
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
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
