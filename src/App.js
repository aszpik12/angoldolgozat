import "./App.css";
import Kiegeszit from "./view/Kiegeszit";
import gepelModel from "./module/gepelModel";

function App() {
  const MODEL = new gepelModel();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Angol behelyettesítő feladat</h1>
      </header>
      <Kiegeszit model={MODEL} />
    </div>
  );
}

export default App;
