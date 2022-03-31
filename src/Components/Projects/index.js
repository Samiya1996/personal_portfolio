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
                       <b>Get Advice</b><br/>
                       A fun web app to find random and humorous advices.<br/>
                       Advice Slip API has been used to fecth a advice. Every time the button is clicked it fetches an advice and show it on screen. 
                        <br/>
                       <a href="https://samiya1996.github.io/random_advice_app/" target="_blank">See The Demo</a>
                       <br/>
                       <a href="https://github.com/Samiya1996/random_advice_app">Find Code here</a>
                       </Card.Body>
                       </Card>
                    </Row>
                    <br/>
                    <Row>
                        <Card>
                            <Card.Body>
                       <b>Crypto Mars</b><br/>
                        A web app for latest information about cryptocurrencies<br/>
                        Used Coinranking API to get the information of various cryptocurrencies 
                        and Bing News Search API to fetch the latest news about different coins. 
                        <br/>
                       <a href="https://tangerine-biscuit-e99d5f.netlify.app/" target="_blank">See The Demo</a>
                       <br/>
                        <a href="https://github.com/Samiya1996/Crypto_app">Find Code here</a>
                       </Card.Body>
                       </Card>
                    </Row>
                    <br/>
                    <Row>
                        <Card>
                            <Card.Body>
                       <b>Anaphora Resolution in Bengali Sentences</b><br></br>
                       Anaphora Resolution mostly appears as pronoun resolution which means finding the pronoun that refers 
                       to a noun, appeared earlier in the sentence. Anaphora resolution in Bengali language is one of 
                       the major challenges in Natural Language Processing. For this a rule based method was implemented
                        and after processing 7 types of sentences that were chosen from 
                        TDIL (Technology Development for Indian Language) corpus 82.8% accuracy has been achieved
                       <br/>

                       <a href="https://www.semanticscholar.org/paper/A-Rule-based-Approach-for-Anaphora-Resolution-in-Das-Banerjee/4f72e618f923e865a65142aceb1cbd5e70371456">Find this project here</a>
                       </Card.Body>
                       </Card>
                    </Row> 
                    <br/>
                    <Row>
                        <Card>
                            <Card.Body>
                       <b>E-commerce Website</b><br/>
                        Building a online shopping application<br/>
                        Work in progress...
                        <br/>
                        <a href="https://github.com/Samiya1996/reine_roi">Find Code here</a>
                       </Card.Body>
                       </Card>
                    </Row>
                    <br/>
                    {/* <Row>
                        <Card>
                            <Card.Body>
                       <b>Blogging Website</b><br/>
                        Building a online Blogging Website<br/> 
                        Work in progress...
                        <br/>
                        <a href="https://github.com/Samiya1996/blog_my_blog">Find Code here</a>
                       </Card.Body>
                       </Card>
                    </Row> 
                    <br/> */}
                </Container>
            </div>
        );
    }
}
export default Projects;