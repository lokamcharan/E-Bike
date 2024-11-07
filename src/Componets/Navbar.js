// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// function Route() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home" style={{fontSize:'50px'}}>E-Bike </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//           </Nav>
//           <Nav>
//             <Nav.Link href="#home"style={{fontSize:'25px'}}>Home</Nav.Link>
//             <Nav.Link href="#login"style={{fontSize:'25px'}}>Login/Signup</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Route;


import { NavLink } from 'react-router-dom';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Direct() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: '50px'}}>E-Bike</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to="/" style={{ fontSize: '25px', textDecoration: 'none', marginRight: '20px' }}>Home</NavLink>
            <NavLink to="/login" style={{ fontSize: '25px', textDecoration: 'none' }}>Login/Signup</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Direct;
