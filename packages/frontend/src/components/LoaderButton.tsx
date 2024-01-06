import Button from "react-bootstrap/Button";
import { BsArrowRepeat } from "react-icons/bs";

import "./LoaderButton.css";

export default function LoaderButton({
  className = "",
  disabled = false,
  isLoading = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <BsArrowRepeat className="spinning" />}
      {props.children}
    </Button>
  );
}
