import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Works from "./components/Works/works.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";
import Carousell from "./components/Carousell/Carousell.js"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Carousell/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
