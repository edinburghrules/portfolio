import "./styles/app.scss";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Main />
        <Projects />
      </div>
    </div>
  );
}

export default App;
