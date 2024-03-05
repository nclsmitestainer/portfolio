import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

// Components
import Aside from "./components/Aside";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main className="main">
        <div className="content">
          <Aside />
          <div className="container-content">
            <section>
              <section>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="experiences" element={<Experiences />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </section>
            </section>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};
