// this is a stand-in for externally managed icons

import ErrorIcon from "./icons/error.svg?react";

const iconsMap = {
  error: ErrorIcon,
};

const Icon = ({ variant }) => {
  const IconComponent = iconsMap[variant];

  if (!IconComponent) {
    console.error(`Error: no icon found for "${variant}"`);
    return null;
  }

  return (
    <div className="badge-icon">
      <IconComponent />
    </div>
  );
};

export default Icon;
