import { Routes as Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<AboutMe />} />
      <Route path="/aboutme" element={<AboutMe />} />

      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Error />} />
    </Switch>
  );
};

export default Router;
