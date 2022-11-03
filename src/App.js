import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./styled/Global.styled";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
