import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Navi() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-print-none">
      <Container>
        <Navbar.Brand><Link to="/">@nimoooos</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/nimoooos">
              <Button variant="dark">Github</Button>
            </Nav.Link>
            <Nav.Item><Link to="/projects"><Button className='my-2 mx-2'>Resume</Button></Link></Nav.Item>
            <Nav.Item><Link to="/contacts"><Button className='my-2 mx-2'>Contacts</Button></Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}