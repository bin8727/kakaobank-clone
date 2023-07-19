import Busi from "./Busi";
import Info from "./Info";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <Info />
        <Busi />
      </div>
    </div>
  );
};

export default Footer;