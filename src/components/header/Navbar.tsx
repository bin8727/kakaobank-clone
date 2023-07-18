import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <li className="header__nav-items">
        <Link to='/' className="header__nav-anchor">은행소개</Link>
      </li>

      <li className="header__nav-items">
        <Link to='/' className="header__nav-anchor">IR투자정보</Link>
      </li>

      <li className="header__nav-items">
        <Link to='/' className="header__nav-anchor">상품안내</Link>
      </li>

      <li className="header__nav-items">
        <Link to='/' className="header__nav-anchor">고객센터</Link>
      </li>

      <li className="header__nav-items header__nav-btn">
        <Link to='/' className="header__nav-btn-link">서류제출하기</Link>
      </li>

      <li className="header__nav-ico">
        <Link to='/' />
      </li>
    </>
  );
};

export default Navbar;