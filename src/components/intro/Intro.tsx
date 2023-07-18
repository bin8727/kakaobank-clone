import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro__main">
      <div className="intro__main-content">
        <h3 className="intro__main-tit_main">
          이미 모두의 은행
          <br></br>
          지금은 카카오뱅크
        </h3>

        <p className="intro__main-tit_sub">
          한 사람, 한 사람을 위해 시작한 은행이
          <br></br>
          더 많은 사람들이 찾는 모두의 은행이 되었습니다.
        </p>

        <p className="intro__main-tit_sub2">
          보내고, 받고, 모으고, 쓰는
          <br></br>
          당신의 모든 일이 바뀌고 있습니다.
        </p>

        <ul className="intro__main-list_store">
          <li>
            <Link to='https://play.google.com/store/apps/details?id=com.kakaobank.channel&pli=1' className="intro__main-link_store">
              <span className="intro__main-img"></span>
              Google Play
            </Link>
          </li>
          <li>
            <Link to='https://apps.apple.com/kr/app/id1258016944' className="intro__main-link_store">
              <span className="intro__main-img-app"></span>
              App Store
            </Link>
          </li>
        </ul>
      </div>
      <div className="background-line"></div>
    </div>
  );
};

export default Intro;