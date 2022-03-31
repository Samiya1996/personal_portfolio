import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgImg from './bg_img.JPG';

import dp from './dp_samiya.jpg';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Home extends React.Component{
    render()
    {
        return(
            <div>
                
                <div className="bgImg">
                

                    <div className="introText" >
                        <h2>"Hello World!!!"</h2><br/>
                        <h2>I'm Samiya</h2> 
                        <h4> Technophile | Bibliophile | Curious</h4>
                        <h4>Travel Enthusiast</h4>
                    </div>
                </div>
                <br></br>
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={5}>
                            <img className="displayPic" src={dp}></img>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={7}>
                                <div className="aboutMe">
                                <h3>About Me</h3>
                                Hi everyone, this is Samiya Maity.<br></br>
                                I am currently working as a Google Workspace Developer at Vaco Binary Semantics.
                                My role involves developing Web Apps using Google App script. 
                                And developing various business tools for different teams on google workspace.
                                My interest lies in web technologies. Working on a fullstack web app
                                for self learning. 
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>    
            </div>
        );
    }
}
export default Home;