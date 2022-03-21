import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
class Education extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                <Container>
                    <h1>Education</h1>
                    <br></br>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3}><b>2014-2018</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                        

                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header><b>Bachelor of Technology (B.Tech)<br></br></b></Card.Header>
                            <Card.Body>
                                <Card.Title><b>College of Engineering and Management,Kolaghat.</b></Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>B.Tech in Computer Science and Engineering</li>
                                        <li>Cumulative GPA-7.29</li>
                                    </ul>
                                        
                                    </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>


                    </Row>
                    <br></br>
                    <Row>  

                        <Col xs={12} sm={12} md={3} lg={3}><b>2014</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>

                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header><b>West Bengal Council of Higher Secondary Education(WBCHSE)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Aligunj Rishi Raj Narayan Balika Vidyalaya</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Higher Secondary Education</li>
                                            
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        



                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                    
                    
                        <Col xs={12} sm={12} md={3} lg={3}><b>2012</b></Col>
                        <Col xs={12} sm={12} md={9} lg={9}>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Header><b>West Bengal Board Of Secondary Education(WBBSE)</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><b>Aligunj Rishi Raj Narayan Balika Vidyalaya</b></Card.Title>
                                        <Card.Text>
                                        <ul>
                                            <li>Secondary Education</li>
                                            
                                        </ul>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                        
                        
                        </Col>
                    </Row>
                </Container>
               
            </div>
        );
    }
}
export default Education;