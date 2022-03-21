
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Education from './Components/Education'
import Certifications from './Components/Certifications'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Home from './Components/Home'
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-scroll';


function App() {
  return (
    <div>
      <Router>
    <div className="body">
      <div className="name_title">
      </div>
        
        <Navbar className="navBar" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                      
                      <Nav.Link><Link  to="home" spy={true} smooth={true}>Home</Link></Nav.Link>
                      <Nav.Link><Link  to="edu" spy={true} smooth={true}>Education</Link></Nav.Link>
                      <Nav.Link><Link  to="exp" spy={true} smooth={true}>Experience</Link></Nav.Link>
                      <Nav.Link><Link  to="pro" spy={true} smooth={true}>Projects</Link></Nav.Link>
                      <Nav.Link><Link  to="ach" spy={true} smooth={true}>Certifications</Link></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

        <div id="home"><Home/></div>
        <div id="edu"><Education/></div>
        <div id="exp"><Experience/></div>
        <div id="pro"><Projects/></div>
        <div id="ach"><Certifications/></div>


        <br></br>
        <footer class="bg-dark text-center text-white">
  
          <div class="container p-4">
    
          <section class="mb-3">

          <a class="btn btn-outline-light btn-floating m-1" href="mailto:maitysamiya@gmail.com" role="button">
              <i class="fa fa-envelope"></i></a>
             
      
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/samiya.maity.5/" role="button">
              <i class="fab fa-facebook-f"></i></a>

     
     
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/maity.samiya/" role="button">
              <i class="fab fa-instagram"></i></a>

      
            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/samiya-maity-194739b8/" role="button">
              <i class="fab fa-linkedin-in"></i></a>

      
            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Samiya1996" role="button">
              <i class="fab fa-github"></i></a>

              
             
          </section>
          </div>
          <div>Phone : 8170844994 </div><br/>
        </footer>
      
    </div>
    </Router>

    </div>
  );
}

export default App;
