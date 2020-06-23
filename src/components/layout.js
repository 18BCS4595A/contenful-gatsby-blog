import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

// TODO: Convert to functional component ✔

// class Template extends React.Component {
//   render() {
//     const { children } = this.props;

//     return (
//       <Container>
//         <Navigation />
//         {children}
//       </Container>
//     );
//   }
// }
// * converted to functional component

const Template = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Template;
