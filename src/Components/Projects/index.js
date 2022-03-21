import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
class Projects extends React.Component{
    render()
    {
        return(
            <div>
                <br></br>
                <br></br>
                <Container>
                    <h1>Projects</h1>
                    <br></br>
                    <Row>
                        <Card>
                            <Card.Body>
                       <b>Random Advice App</b><br></br>
                       Picks random advice from advice api and shows them in random manner on click of a button 
                       <br></br>

                       <a href="https://samiya1996.github.io/random_advice_app/">Find this project here</a>
                       </Card.Body>
                       </Card>
                    </Row>
                    <br></br>
                    <Row>
                        <Card>
                            <Card.Body>
                       <b>Anaphora Resolution in Bengali Sentences</b><br></br>
                       Anaphora Resolution mostly appears as pronoun resolution which means finding the pronoun that refers 
                       to a noun, appeared earlier in the sentence. Anaphora resolution in Bengali language is one of 
                       the major challenges in Natural Language Processing. For this a rule based method was implemented
                        and after processing 7 types of sentences that were chosen from 
                        TDIL (Technology Development for Indian Language) corpus 82.8% accuracy has been achieved
                       <br></br>

                       <a href="https://www.semanticscholar.org/paper/A-Rule-based-Approach-for-Anaphora-Resolution-in-Das-Banerjee/4f72e618f923e865a65142aceb1cbd5e70371456">Find this project here</a>
                       </Card.Body>
                       </Card>
                    </Row>  

                </Container>
            </div>
        );
    }
}
export default Projects;