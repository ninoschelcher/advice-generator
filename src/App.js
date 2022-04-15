import Advices from "./components/Advices";
import "./styles/App.css";

const App = () => {
  return (
    <div className="background">
      <div className="advice-overlay">
        <Advices />
      </div>
    </div>
  );
};

export default App;
