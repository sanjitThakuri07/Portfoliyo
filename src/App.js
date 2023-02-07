import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";
import GlobalStyle from "./styled/Global.styled";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import WorkDetail from "./pages/workDetail";
// animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs></AboutUs>
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/work/:id" exact>
            <WorkDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
