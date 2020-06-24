import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";
import Helmet from "react-helmet";

const Template = ({ children }) => {
  return (
    <>
      <Container>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/0107904d8b.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>
        <Navigation />
        {children}
      </Container>
    </>
  );
};

export default Template;
