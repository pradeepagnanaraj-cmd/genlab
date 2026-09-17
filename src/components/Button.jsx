import React from "react";
import "./Button.css";

function Button({
  children,
  variant = "primary", // primary, secondary, outline, text, danger
  size = "md", // sm, md, lg
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon = null
}) {
  return (
    <button
      type={type}
      className={`custom-btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export default Button;
