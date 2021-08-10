
import {Navbar, Container, Nav} from 'react-bootstrap'
const Header = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">X-Clothing</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/addproduct">Add Product</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}
 
export default Header;