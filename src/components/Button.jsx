import React from "react";
import PropTypes from "prop-types";

function Button({
  onClick,
  label,
  variant = "default",
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
}) {
  const buttonClass = `button ${
    variant === "outline"
      ? "button-outline"
      : variant === "ghost"
      ? "button-ghost"
      : ""
  } ${disabled ? "button-disabled" : ""} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      <span className="button-label">{label}</span>
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "outline", "ghost"]),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
