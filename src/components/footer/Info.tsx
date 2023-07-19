import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="footer__info">
      <Link to='/' className="footer__link-service">
        모바일뱅킹 서비스 이용약관
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        전자금융거래 기본약관
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service bold">
        위치기반 서비스 이용약관
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service bold">
        개인정보처리방침
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service bold">
        전자민원접수
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        보호금융상품등록부
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        상품공시실
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        경영공시
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        공지사항
      </Link>

      <br></br>
      
      <Link to='/' className="footer__link-service">
        전자서명인증업무준칙
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service">
        카카오뱅크 인증서 서비스 이용약관
      </Link>
      <span className="footer__txt-bar"></span>

      <Link to='/' className="footer__link-service bold">
        카카오뱅크 인증서 서비스 개인정보처리방침
      </Link>
    </div>
  );
};

export default Info;