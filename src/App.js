import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import Intro from "./components/intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro/>
        <AboutMe/>
        
      </div>
      <Projects/>
    </div>
  );
}

export default App;

