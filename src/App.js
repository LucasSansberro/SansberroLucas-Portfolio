import NavBar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/Body/AboutMe";
import ProjectsContainer from "./Components/Body/ProjectsContainer";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Components/Body/Skills";
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <ProjectsContainer />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
