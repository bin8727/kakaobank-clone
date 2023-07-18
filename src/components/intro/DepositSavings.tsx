import { Link } from 'react-router-dom';
import SavingsMoney from '../../assets/main-savings-money.png';
import Arrow from '../../assets/home_arr.png';
import Savings from '../../assets/main-savings.png';

const DepositSavings = () => {
  return (
    <div className="intro__deposit-savings">
      <div className="intro__deposit-savings-txt">
        <h3>
          우대조건 없이
          <br></br>
          합리적인 예금과 적금
        </h3>

        <p>
          기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
          <br></br>
          카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.
        </p>

        <img src={SavingsMoney} alt='' />
      </div>

      <div className="intro__deposit-savings-btn">
        <Link to='/' className='intro__deposit-savings-link_btn'>
          정기예금
          <img src={Arrow} alt='' className='intro__deposit-savings-ico_arr' />
        </Link>
        <Link to='/' className='intro__deposit-savings-link_btn'>
          자유적금
          <img src={Arrow} alt='' className='intro__deposit-savings-ico_arr' />
        </Link>
      </div>

      <div className="intro__deposit-savings-img">
        <img src={Savings} alt='' />
      </div>
    </div>
  );
};

export default DepositSavings;