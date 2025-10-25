import React from "react";

function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      aria-pressed="false"
    >
      {children}
    </button>
  );
}

export default Button;