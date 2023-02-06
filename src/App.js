import React from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";
import GlobalStyle from "./styled/Global.styled";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import WorkDetail from "./pages/workDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <AboutUs></AboutUs>
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <WorkDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
