import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Navi() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">@nimoooos</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/nimoooos">
              <Button variant="secondary">Github</Button>
            </Nav.Link>
            <Nav.Item><Link to="/resume"><Button className='my-2'>Resume</Button></Link></Nav.Item>
            <Button variant="secondary-outline">
              <NavDropdown className="d-none" title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/discord-arbitration">
                    <Button variant="secondary-outline">Discord Arbitration</Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/line-of-sight">
                    <Button variant="secondary-outline">Line of Sight</Button>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Refresh Page
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}