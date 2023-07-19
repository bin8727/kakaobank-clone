import NightImg from '../../assets/main-loan.png';
import Arrow from '../../assets/home_arr2.png';
import { Link } from 'react-router-dom';

const Night = () => {
  return (
    <div className="intro__night">
      <div className="sky"></div>
      <div>
        <img src={NightImg} alt='' className='intro__night-img' />
      </div>

      <div className='intro__night-txt'>
        <h3>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h3>
        <p>이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수 있습니다.</p>
      </div>

      <div className='intro__night-btn'>
        <Link to='/' className='intro__night-link_night'>
          마이너스 통장대출
          <img src={Arrow} alt='' className='intro__night-ico_arr' />
        </Link>

        <Link to='/' className='intro__night-link_night'>
          신용대출
          <img src={Arrow} alt='' className='intro__night-ico_arr' />
        </Link>

        <Link to='/' className='intro__night-link_night'>
          개인사업자 대출
          <img src={Arrow} alt='' className='intro__night-ico_arr' />
        </Link>

        <Link to='/' className='intro__night-link_night'>
          전월세보증금 대출
          <img src={Arrow} alt='' className='intro__night-ico_arr' />
        </Link>
      </div>

      <div className='moon'>
        <div className='moon_original'></div>
        <div className='moon_shadow'></div>
      </div>
    </div>
  );
};

export default Night;