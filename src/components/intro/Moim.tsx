import Divider from "./Divider";
import MoimImg from '../../assets/main-moim.png';
import Arrow from '../../assets/home_arr.png';
import { Link } from "react-router-dom";

const Moim = () => {
  return (
    <>
      <div className="intro__moim">
        <div>
          <img src={MoimImg} alt="" className="intro__moim-img" />
        </div>

        <div className="intro__moim-txt">
          <h3>
            함께 쓰고 같이 보는
            <br></br>
            모임통장  
          </h3>
          <p>
            카카오톡 친구를 바로 모임통장으로 초대하고
            <br></br>
            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
            <br></br>
            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
          </p>
        </div>

        <div className="intro__moim-btn">
          <Link to='/' className="intro__moim-link_bank">
            모임통장
            <img src={Arrow} alt="" className="intro__moim-ico_arr" />
          </Link>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Moim;