// this is a stand-in for externally managed icons

interface IconProps {
  iconType : string;
}

const icons = [
  'checkCircle',
  'favorite',
  'info',
  'star',
];

const Icon = ({ iconType } : IconProps) => {
  if (!icons.includes(iconType)) {
    console.error(`Error: no icon found for "${iconType}"`);
    return null;
  }

  return (
    <div className="badge-icon">
      <img src={`icons/${iconType}.svg`} />
    </div>
  );
};

export default Icon;
