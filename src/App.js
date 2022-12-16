import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/Projects";
import Qualification from "./components/qualification/Qualification";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro/>
        <AboutMe/>
        <Skills />
        <Qualification />
        <Projects/>
      </div>
      
    </div>
  );
}

export default App;

