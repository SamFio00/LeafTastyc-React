import leafIcon from '../assets/icons/leaf.svg';

function Logo({ size = 80 }) {
  return (
    <div className="logo-container">
      <img src={leafIcon} alt="Leaf" width={size} height={size} />
      <span className="logo-text">
        Leaf<span className="highlight">Tastyc</span>
      </span>
    </div>
  );
}

export default Logo;