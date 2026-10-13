import CreateThreadForm from "./components/CreateThreadForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ToastContainer from "./components/ToastContainer.jsx";

export default function App() {
  return (
    <div className="wrap">
      <h1>Threadbase</h1>
      <p className="muted">Global toast feedback for asynchronous actions</p>

      <ToastContainer />

      <CreateThreadForm />
      <LoginForm />
    </div>
  );
}
