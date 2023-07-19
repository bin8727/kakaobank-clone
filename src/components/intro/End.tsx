import ItHome from '../../assets/home_it.png';

const End = () => {
  return (
    <div className="intro__end">
      <div className="intro__end-txt">
        <h3>
          IT 기술로 카카오뱅크를
          <br></br>
          만들어 갑니다.
        </h3>
      </div>
      <span className="intro__end-cont_bar"></span>
      <span className="intro__end-cont_bar_bg"></span>

      <div className="intro__end-img">
        <img src={ItHome} alt='' />

        <ul>
          <li>
            <strong>간결하고, 유려하게</strong>
            <p>
              작은 모바일 화면에 적합하도록
              <br></br>
              복잡함을 덜어낸
              <br></br>
              유려하고 친화적인 UX
            </p>
          </li>

          <li>
            <strong>간편한 인증, 철저한 보안</strong>
            <p>
              지문, 비밀번호로 간편한 인증
              <br></br>
              IT 기술의 강력한 보안 검증과
              <br></br>
              데이터 암호화
            </p>
          </li>

          <li></li>

          <li>
            <strong>Mobile First, One App</strong>
            <p>
              모바일에서 뱅킹이 더 쉽고 편리하게
              <br></br>
              여러 앱을 설치할 필요 없이
              <br></br>
              하나의 앱으로
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default End;