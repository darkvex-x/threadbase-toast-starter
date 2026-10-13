# Threadbase — Toast System (Starter)

Right now the Threadbase forms fail silently: you post a thread or log in, and nothing on screen tells you whether it worked. Your job is to give those actions a voice.

## Run the app

```bash
npm install
npm run dev
```

Open the printed local URL. There is no separate server to run — `src/api/mockApi.js` fakes the network.

## Tasks
1. **Implement useToast (`src/context/ToastContext.jsx`)** — `dismissToast` and `showToast`.
2. **Build the ToastContainer (`src/components/ToastContainer.jsx`)** — render toasts fixed in corner.
3. **Wire create-thread mutation (`src/components/CreateThreadForm.jsx`)** — `onSuccess` & `onError`.
4. **Wire login mutation (`src/components/LoginForm.jsx`)** — `onSuccess` & `onError`.
