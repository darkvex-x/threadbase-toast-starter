import { useToast } from "../context/ToastContext.jsx";

export default function ToastContainer({ toasts: propToasts, onDismiss }) {
  const context = useToast();
  const toasts = propToasts ?? context.toasts;
  const dismiss = onDismiss ?? context.dismissToast;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => dismiss(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
