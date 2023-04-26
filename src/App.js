import Home from "./components/Home";
import NavBar from "./components/NavBar"
import SocialLinks from "./assets/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  return (
    <div class='bghome'>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
