import DepositSavings from "./DepositSavings";
import Drawal from "./Drawal";
import Intro from "./Intro";
import Moim from "./Moim";

const Main = () => {
  return (
    <div className="main-content">
      <div className="main-article">
        <div className="module-content">
          <Intro />
          <Drawal />
          <DepositSavings />
          <Moim />
        </div>
      </div>
    </div>
  );
};

export default Main;