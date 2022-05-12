import './App.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";

import {Home} from "./components/Home";
import {Education} from "./components/Education";
import {Employers} from "./components/Employers";
import {Uber} from "./components/Uber";
import {Google} from "./components/Google";
import {Impact} from "./components/Impact";




function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ISU PART 2 </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} to="/Education">Education</Nav.Link>
      <Nav.Link as={Link} to="/Impact">Impact of computers</Nav.Link>

      <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/Employers">Employers</NavDropdown.Item>
     
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Google">Google</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Uber">Uber</NavDropdown.Item>
        </NavDropdown>

    </Nav>
    </Container>
  </Navbar>

  <div>
    <Routes> 

      <Route path="Home" element={<Home />}/>
      <Route path="Education" element={<Education />}/>
      <Route path="Employers" element={<Employers />}/>
      <Route path="Google" element={<Google />}/>
      <Route path="Uber" element={<Uber />}/>
      <Route path="Impact" element={<Impact />}/>
    </Routes>
  </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
