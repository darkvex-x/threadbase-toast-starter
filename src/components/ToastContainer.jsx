import { useToast } from "../context/ToastContext.jsx";

export default function ToastContainer({ toasts: propsToasts, onDismiss }) {
  const { toasts: contextToasts, dismissToast } = useToast();
  const toasts = propsToasts ?? contextToasts;
  const handleDismiss = onDismiss ?? dismissToast;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => handleDismiss(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
