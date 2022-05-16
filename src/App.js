import './App.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";

import {Hye} from "./components/Hye";
import {Education} from "./components/Education";
import {Employers} from "./components/Employers";
import {Uber} from "./components/Uber";
import {Google} from "./components/Google";
import {Impact} from "./components/Impact";
import {Brainstation} from "./components/Brainstation";
import {Waterloo} from "./components/Waterloo";
import {Mcmaster} from "./components/Mcmaster";
import {Toronto} from "./components/Toronto";
import {Amazon} from "./components/Amazon";
import {Privacy} from "./components/Privacy";
import {Work} from "./components/Work";
import {Social} from "./components/Social";
import "./components/Size";
import {Sources} from "./components/Sources";


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ISU PART 2 </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Hye">Home</Nav.Link>
      <NavDropdown title="Education" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/Education">General-info</NavDropdown.Item>
     
          <NavDropdown.Divider />
        
        <NavDropdown.Item as={Link} to="/Brainstation">Brainstation</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Waterloo">University of Waterloo</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/McMaster">McMaster University</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Toronto">University of Toronto</NavDropdown.Item>
      </NavDropdown>
    
    <NavDropdown title="Impact of computers on software engineering" id="navbarScrollingDropdown">
      <NavDropdown.Item as={Link} to="/Impact">Adaptive technologies</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Privacy">Privacy issues</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Work">Personal life</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Social">Social media</NavDropdown.Item>

      </NavDropdown>

      <NavDropdown title="Employers" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/Employers">Employers in Ontario</NavDropdown.Item>
     
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Google">Google</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Uber">Uber</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Amazon">Amazon</NavDropdown.Item>
         
        </NavDropdown>
        <Nav.Link as={Link} to="/Sources">Sources</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <div>
    <Routes> 

      <Route path="Hye" element={<Hye />}/>
      <Route path="Education" element={<Education />}/>
      <Route path="Employers" element={<Employers />}/>
      <Route path="Google" element={<Google />}/>
      <Route path="Uber" element={<Uber />}/>
      <Route path="Impact" element={<Impact />}/>
      <Route path="Brainstation" element={<Brainstation />}/>
      <Route path="Waterloo" element={<Waterloo />}/>
      <Route path="Mcmaster" element={<Mcmaster />}/>
      <Route path="Toronto" element={<Toronto />}/>
      <Route path="Amazon" element={<Amazon />}/>
      <Route path="Privacy" element={<Privacy />}/>
      <Route path="Work" element={<Work />}/>
      <Route path="Social" element={<Social />}/>
      <Route path="Sources" element={<Sources />}/>

    </Routes>
  </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
