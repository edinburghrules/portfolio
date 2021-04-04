import "./styles/app.scss";
import Navbar from "./sections/navbar";
import Main from "./sections/main";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
