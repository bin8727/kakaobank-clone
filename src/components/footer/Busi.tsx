import { Link } from "react-router-dom";
import WebAccessibility from '../../assets/webaccessibility.png';
import WebTrust from '../../assets/web_trust_seal.png';

const Busi = () => {
  return (
    <div className="footer__busi">
      <span className="footer__busi-txt">
        (주)카카오뱅크∙윤호영∙사업자번호 375-88-00197
      </span>
      대표전화 1599-3333
      <span className="footer__busi-tel">
      (해외 +82-2-6420-3333)
      </span>

      <div className="footer__busi-copyright">
        Copyright © KakaoBank Corp. All rights reserved.
        <br></br>
        본 홈페이지는 포트폴리오 작업이고, 실제 홈페이지와는 상관이 없음을 알립니다.
      </div>

      <div className="footer__bottom">
        <Link to='/' className="footer__link-license">
          <img src={WebAccessibility} alt="" className="footer__webaccessibility" />
          <div className="footer__link-txt">
            <span>웹 접근성 품질인증</span>
          </div>
        </Link>
        <Link to='/' className="footer__link-license footer__link-webtrust">
          <img src={WebTrust} alt="" className="footer__web-trust" />
          <div className="footer__link-txt">
            <span>웹 트러스트 인증</span>
          </div>
        </Link>

        <ul className="footer__list">
          <li>
            <Link to='https://www.facebook.com/kakaobank.official' className="footer__list_link link-facebook">
              <span className="ico_sns">페이스북</span>
            </Link>
          </li>
          
          <li>
            <Link to='https://www.instagram.com/kakaobank.official' className="footer__list_link link-instragram">
              <span className="ico_sns">인스타그램</span>
            </Link>
          </li>

          <li>
            <Link to='https://www.youtube.com/kakaobank' className="footer__list_link link-youtube">
              <span className="ico_sns">유튜브</span>
            </Link>
          </li>
          
          <li>
            <Link to='https://brunch.co.kr/@kakaobank' className="footer__list_link link-brunch">
              <span className="ico_sns">브런치</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Busi;