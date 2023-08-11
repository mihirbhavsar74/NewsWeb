import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ onSelect }) {
  return (
    
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Navbar.Brand  href="/">News-Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => onSelect('All')}>All</Nav.Link>
          <Nav.Link onClick={() => onSelect('Top')}>Top</Nav.Link>
          <Nav.Link onClick={() => onSelect('Trending')}>Trending</Nav.Link>
          <Nav.Link onClick={() => onSelect('Science')}>Science</Nav.Link>
          <Nav.Link onClick={() => onSelect('Entertainment')}>Entertainment</Nav.Link>
          <Nav.Link onClick={() => onSelect('Sports')}>Sports</Nav.Link>
          


        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default Navigation;
