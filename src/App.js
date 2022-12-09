import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro/>
        <AboutMe/>
        <Projects/>
        <Skills />
      </div>
      
    </div>
  );
}

export default App;

