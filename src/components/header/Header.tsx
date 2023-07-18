import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__wrap">
          <ul className="header__items">
            <Logo />

            <Navbar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;