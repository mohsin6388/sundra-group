import React from "react";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cream, #f8f1e1)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "3px solid #e5e7eb",
          borderTopColor: "#1f4d2c",
          borderRadius: "50%",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
