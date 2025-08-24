import "./Badge.css";
import Icon from "./Icon"; // this is a stand-in for externally managed icons

interface BadgeProps {
  label: string;
  style?: "filled" | "outlined";
  icon?: "none" | "checkCircle" | "favorite" | "info" | "star"; // limited to 4 for demonstration purposes
  size?: "small" | "medium" | "large";
  variant?:
    | "default"
    | "error"
    | "warning"
    | "success"
    | "highlight"
    | "information";
}

const Badge = ({
  label,
  style = "filled",
  icon = "none",
  size = "medium",
  variant = "default",
}: BadgeProps) => {
  return (
    <div
      className={`badge-root badge-root-${style} badge-root-${size} badge-root-${variant}`}
    >
      <Icon iconType={icon} />
      <div className="badge-label">{label}</div>
    </div>
  );
};

export default Badge;
