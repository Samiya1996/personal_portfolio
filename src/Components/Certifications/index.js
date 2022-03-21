import React from 'react';
import {Container, Row, Col, Card,Button} from 'react-bootstrap';
import freecodecamp from './logoList/freecodecamp.png'
import mongodb from './logoList/mongodb.png'
import educative from './logoList/educative.png'
import hackerrank from './logoList/hackerrank.png'

class Achievements extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                
                <Container>
                <h1>Licenses & certifications</h1>
                <br></br>
                <Row>
                        <Card border="warning" style={{ width: '35rem' }}>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={2}>
                                <br/> 
                                <img src={freecodecamp} alt="freecodecamp logo" width="100px" height="85px"></img>
                                </Col>
                                <Col>
                                <Card.Body>
                                    <Card.Title>JavaScript Algorithms and Data Structures</Card.Title>
                                        <Card.Text>
                                        freeCodeCamp<br/>
                                        Issued Jul 2019 · No Expiration Date <br/><br/>
                                        <a href="https://www.freecodecamp.org/certification/maity_samiya/javascript-algorithms-and-data-structures"target="_blank"  role="button" aria-disabled="true">See Credendials</a>
                                        </Card.Text>
                                </Card.Body>
                                </Col>
                            </Row>  
                        </Card>
                    </Row>
                    <br></br>
                    <br></br>
                <Row>
                        <Card border="warning" style={{ width: '35rem' }}>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={2}>
                                <br/>
                                <img src={hackerrank} alt="hackerrank logo" width="100px" height="100px"></img>
                                </Col>
                                <Col>
                                <Card.Body>
                                    <Card.Title>Problem Solving (Basic)</Card.Title>
                                        <Card.Text>
                                        HackerRank<br/>
                                        Issued Sep 2020 · No Expiration Date <br/><br/>
                                        <a href="https://www.hackerrank.com/certificates/4a708144ac09"target="_blank"  role="button" aria-disabled="true">See Credendials</a>
                                        </Card.Text>
                                </Card.Body>
                                </Col>
                            </Row>  
                        </Card>
                    </Row>
                    <br></br>
                    <br></br>
                <Row>
                        <Card border="warning" style={{ width: '35rem' }}>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={2}>
                               <br/>
                                <img src={mongodb} alt="mongodb logo" width="100px" height="95px"></img>
                                </Col>
                                <Col>
                                <Card.Body>
                                    <Card.Title>MongoDb Basics</Card.Title>
                                        <Card.Text>
                                        MongoDB University<br/>
                                        Issued Jul 2019 · No Expiration Date <br/><br/>
                                        <a href="https://university.mongodb.com/course_completion/4726e7bb-a90b-4a73-8fd7-4dbdbf562772/printable"target="_blank"  role="button" aria-disabled="true">See Credendials</a>
                                        </Card.Text>
                                </Card.Body>
                                </Col>
                            </Row>  
                        </Card>
                    </Row>
                    <br></br>
                    <br></br>
                <Row>
                        <Card border="warning" style={{ width: '35rem' }}>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={2}>
                                <br/>
                                <img src={educative} alt="educative logo" width="110px" height="100px"></img>
                                </Col>
                                <Col>
                                <Card.Body>
                                    <Card.Title>A Guide to Git & Version Control</Card.Title>
                                        <Card.Text>
                                        Educative, Inc.<br/>
                                        Issued Sep 2021 · No Expiration Date <br/><br/>
                                        <a href="https://www.educative.io/verify-certificate/xGD3yRSPNLg5ZDVYmug6VqBNRBQwhE"target="_blank"  role="button" aria-disabled="true">See Credendials</a>
                                        </Card.Text>
                                </Card.Body>
                                </Col>
                            </Row>  
                        </Card>
                    </Row>
                    <br></br>


                </Container>
            </div>
        );
    }
}


export default Achievements;
