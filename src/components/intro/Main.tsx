import DepositSavings from "./DepositSavings";
import Drawal from "./Drawal";
import End from "./End";
import Foreign from "./Foreign";
import Intro from "./Intro";
import Moim from "./Moim";
import Night from "./Night";
import Week from "./Week";

const Main = () => {
  return (
    <div className="main-content">
      <div className="main-article">
        <div className="module-content">
          <Intro />
          <Drawal />
          <DepositSavings />
          <Moim />
          <Week />
          <Foreign />
          <Night />
          <End />
        </div>
      </div>
    </div>
  );
};

export default Main;