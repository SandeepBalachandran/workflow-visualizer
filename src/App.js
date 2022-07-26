import ReactTooltip from "react-tooltip";
import Header from "./components/common/header/Header";
import Home from "./components/Home";
function App() {
  return (
    <div className="App h-[100vh] w-full" >
      <Header />
      <ReactTooltip />
      <Home />
    </div>
  );
}

export default App;
