import About from "./pages/Aboutme";
import Contact from "./pages/Contactus";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Sidemail from "./pages/Sidemail";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Sidesocials from "./pages/Sidesocials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
      <Sidemail/>
      <Sidesocials/>
    </div>
  );
}

export default App;
