import NavBar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/Body/AboutMe";
import ProjectsContainer from "./Components/Body/ProjectsContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <ProjectsContainer />
    </div>
  );
}

export default App;
