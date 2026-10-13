import CreateThreadForm from "./components/CreateThreadForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ToastContainer from "./components/ToastContainer.jsx";
import { useToast } from "./context/ToastContext.jsx";

export default function App() {
  const { toasts, dismissToast } = useToast();

  return (
    <div className="wrap">
      <h1>Threadbase</h1>
      <p className="muted">Global toast feedback for asynchronous actions</p>

      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      <CreateThreadForm />
      <LoginForm />
    </div>
  );
}
