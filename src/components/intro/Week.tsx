import { Link } from "react-router-dom";
import Divider from "./Divider";
import Arrow from '../../assets/home_arr.png';
import WeekImg from '../../assets/main-26weeks.png';

const Week = () => {
  return (
    <>
      <div className="intro__week">
        <div className="intro__week-txt">
          <h3>
            함께 도전해서
            <br></br>
            재미있는 26주적금
          </h3>
          <p>
            26주동안 변화하는 재미에 빠져있는 사이
            <br></br>
            어느덧 만기 달성 경험을 맛보게 됩니다.
          </p>
        </div>

        <div className="intro__week-btn">
          <Link to='/' className="intro__week-link_bank">
            26주적금
            <img src={Arrow} alt="" className="intro__week-ico_arr" />
          </Link>
        </div>
        
        <div>
          <img src={WeekImg} alt="" className="intro__week-img" />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Week;