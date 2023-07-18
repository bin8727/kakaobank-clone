import { Link } from "react-router-dom";

const Title = () => {
  return (
    <li className="header__logo">
      <Link to='/' className="header__logo-icon" />
    </li>
  );
};

export default Title;