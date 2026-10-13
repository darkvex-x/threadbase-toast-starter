// src/api/mockApi.js — fakes the network
export async function createThread({ title, body }) {
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (title.trim() === "Welcome to Threadbase") {
    const error = new Error("Thread with this title already exists");
    error.response = {
      status: 409,
      data: {
        message: "Thread with this title already exists",
      },
    };
    throw error;
  }

  return {
    id: crypto.randomUUID(),
    title,
    body,
    createdAt: new Date().toISOString(),
  };
}

export async function login({ username, password }) {
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (username === "ada" && password === "password") {
    return {
      user: { name: "Ada", role: "member" },
      token: "mock-jwt-token",
    };
  }

  const error = new Error("Invalid username or password");
  error.response = {
    status: 401,
    data: {
      message: "Invalid username or password",
    },
  };
  throw error;
}
