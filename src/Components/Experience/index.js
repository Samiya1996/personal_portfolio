import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import tracxn from './tracxn.png';
import vaco from './vaco_logo.png';

class Experience extends React.Component{
    render()
    {
        return(
            <div>
                 <br></br>
                <br></br>
                <Container>
                    <h1>Experience</h1>
                    <br></br>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={3}><b>February 2022 - Present</b></Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header><b>Google Workspace Developer<br></br></b></Card.Header>
                            <Card.Body>
                                <Card.Title><b>Vaco Binary Semantics</b></Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>Developed a few web application for various internal process</li>
                                        <li><b>Tools: </b>Google App Script, HTML, CSS, Javascript, jQuery, Bootstrap</li>
                                    </ul>
                                        
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <img src={vaco} alt="vaco logo" width="250px" height="180px"></img>
                        </Col>



                        </Row>
                        <br></br>
                    <Row>  
                        

                        <Col xs={12} sm={12} md={12} lg={3}><b>October 2019 - August 2021</b></Col>
                        <Col xs={12} sm={12} md={12} lg={4}>


                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header><b>Analyst</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Tracxn Technologies Limited</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Worked on the front end for the tracxn web app </li>
                                            <li><b>Tools: </b>HTML, CSS, Javascript, ReactJs</li>
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>



                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                        <img src={tracxn} alt="tracxn logo" width="250px" height="180px"></img>
                        </Col>
                    </Row>
                    <br></br>
                
                </Container>
               
            </div>
        );
    }
}
export default Experience;