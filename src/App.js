import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';


import Signpost from './Components/Signpost';
import Navi from './Components/Navi';
import './App.css';


function App() {
  return (
    <>
      <Navi />
      <Container>
        <Row><h1>Welcome to Soomin's Website</h1></Row>
        <Row>
          <Stack gap={3}>
            <h3>Coming Soon (To Do list)</h3>
            <h5>Add in customizable props to Signpost <Badge bg="danger">1</Badge></h5>
            <h5>Set up router <Badge bg="danger">1</Badge></h5>
            <h5>Make something fun and interesting (good for my mental health) <Badge bg="warning">2</Badge></h5>
            <h5>Do something else with navbar <Badge bg="info">3</Badge></h5>
            <h5>Set up resume <Badge bg="info">3</Badge></h5>
          </Stack>
        </Row>
        <Row><h1>Cats</h1></Row>

        <Row as="div" className='my-5'>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
        </Row>

        <Row as="div" className='my-5'>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
        </Row>

        <Row as="div" className='my-5'>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
          <Col>
            <Signpost />
          </Col>
        </Row>

      </Container>

    </>
  );
}

export default App;
