import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";
import Carousell from "./components/Carousell/Carousell.js"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Carousell/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
