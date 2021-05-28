import React from "react";
import Header from "./Header";
import 'semantic-ui-css/semantic.min.css'; //Important to include this here so other files have it
import { Container } from 'semantic-ui-react'


const Layout = (props) => {
  return(
      <Container>
          <Header/>
          {props.children}
      </Container>

  )
};
export default Layout;