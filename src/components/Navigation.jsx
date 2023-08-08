import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Form, Button , FormControl} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NLogo from '../imgs/netflix_logo.png';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
    
    <Navbar expand="lg">
        <Container fluid>
            <Navbar.Brand href="/"><img width={'90px'} src={NLogo} className='logoImg'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Link to="/" className='nav_item'>Home</Link>
                <Link to="movies" className='nav_item'>movies</Link>
                
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-danger" style={{width:'90px'}}>검색</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}
        

export default Navigation