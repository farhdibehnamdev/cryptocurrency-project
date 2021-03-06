import React from "react";
import "./App.css";
import FooterLayout from "components/layouts/footerLayout";
import MainRouter from "routes";
function App() {
  return (
    <React.Fragment>
      <MainRouter />
      <FooterLayout />
    </React.Fragment>
  );
}

export default App;
