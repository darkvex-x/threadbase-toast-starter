import { useToast } from "../context/ToastContext.jsx";

export default function ToastContainer({ toasts: propToasts, onDismiss: propOnDismiss }) {
  const context = useToast();
  const toasts = propToasts || context.toasts;
  const onDismiss = propOnDismiss || context.dismissToast;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => onDismiss(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
