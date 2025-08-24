import "./Badge.css";
import Icon from "./Icon.tsx"; // this is a stand-in for externally managed icons

interface BadgeProps {
  label: string;
  style?: "filled" | "outlined";
  icon?: string;
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
  icon,
  size = "medium",
  variant = "default",
}: BadgeProps) => {
  return (
    <div
      className={`badge-root badge-root-${style} badge-root-${size} badge-root-${variant}`}
    >
      {/* <Icon variant={icon} /> */}
      <div className="badge-label">{label}</div>
    </div>
  );
};

export default Badge;
