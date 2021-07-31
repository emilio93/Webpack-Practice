import * as React from "react";
import Content from "./Content";
import GHCorner from "./GHCorner";
import Header from "./Header";

const AppComponent = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <GHCorner />
    </div>
  );
};

export default AppComponent;
