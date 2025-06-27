import "./App.css";
import FullscreenKeyListener from "./components/FullScreenKeyListener";
import GalaxyScene from "./three/GalaxyScene";
import StartPageUI from "./UI/startPageUI/startPageUI";

function App() {
  return (
    <>
      <StartPageUI></StartPageUI>
      <GalaxyScene />

      <FullscreenKeyListener></FullscreenKeyListener>
    </>
  );
}

export default App;
