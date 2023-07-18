import { Link } from 'react-router-dom';
import WithDrawal from '../../assets/main-withdrawal.png';
import Arrow from '../../assets/home_arr.png';

const Drawal = () => {
  return (
    <>
      <div className="intro__drawal">
        <div>
          <img src={WithDrawal} alt="" className="intro__drawal-img" />
        </div>

        <div className='intro__drawal-txt'>
          <h3>
            모바일로 더 손쉬운
            <br></br>
            계좌개설, 간편한 이체
          </h3>

          <p>
            인증서, OTP 없이 계좌 개설이 간편합니다.
            <br></br>
            여러 건이 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
          </p>
        </div>

        <div className='intro__drawal-btn'>
          <Link to='/' className='intro__drawal-link_btn'>
            카카오뱅크 입출금통장
            <img src={Arrow} alt='' className='intro__drawal-ico_arr' />
          </Link>
        </div>
      </div>
      <div className="intro-divider"></div>
    </>
  );
};

export default Drawal;