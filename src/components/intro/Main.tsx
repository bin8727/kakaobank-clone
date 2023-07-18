import DepositSavings from "./DepositSavings";
import Drawal from "./Drawal";
import Intro from "./Intro";

const Main = () => {
  return (
    <div className="main-content">
      <div className="main-article">
        <div className="module-content">
          <Intro />
          <Drawal />
          <DepositSavings />
        </div>
      </div>
    </div>
  );
};

export default Main;