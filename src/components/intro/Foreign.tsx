import { Link } from 'react-router-dom';
import ForeignImg from '../../assets/main-foreignRemittance-new.png';
import Arrow from '../../assets/home_arr.png';

const Foreign = () => {
  return (
    <div className="intro__foreign">
      <div className="intro__foreign-img">
        <img src={ForeignImg} alt='' />
      </div>

      <div className='intro__foreign-txt'>
        <h3>
          해외계좌송금과
          <br></br>
          WU빠른해외송금을
          <br></br>
          더 쉽고, 저렴하게
        </h3>
        <p>
          해외계좌송금이 가능한 22개국을 포함하여
          <br></br>
          전세계 200여개국으로
          <br></br>
          WU빠른해외송금이 가능합니다.
        </p>
      </div>

      <div className='intro__foreign-btn'>
        <Link to='/' className='intro__foreign-link_bank'>
          해외송금
          <img src={Arrow} alt='' className='intro__foreign-ico_arr' />
        </Link>
      </div>
    </div>
  );
};

export default Foreign;