// src/app/loading.tsx

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
