import React from 'react';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import {AiFillHome} from "react-icons/ai";
import {AiFillBell} from "react-icons/ai";
import {MdBuild} from "react-icons/md";
import  logo  from '../../../images/RxCrossroadsByMcKesson.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './layout.css';

const NavMenu=()=>{
    return  <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#"><img src={logo} alt="McKesson logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="mr-auto my-2 my-lg-0 nav"  navbarScroll >
      <Nav.Link href="#action1"><span className="spnStyle">Sales</span></Nav.Link>
      <Nav.Link href="#action2"><span className="spnStyle">Orders</span></Nav.Link>
      <NavDropdown title="Inventory" id="navbarScrollingDropdown" className="spnStyle">
        <NavDropdown.Item href="/dynamicReport"><span className="spnStyle">Activity Report</span></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div style={{display:'flex'}}>
            <div style={{paddingRight:"20px",textAlign:"center"}}><AiFillHome color='grey' size='2rem'/><div style={{verticalAlign:"bottom"}}>Home</div></div>
            <div style={{paddingRight:"10px",textAlign:"center"}}><AiFillBell  color='grey' size='2rem'/><div style={{verticalAlign:"bottom"}}>Notifications</div></div>
            <div style={{paddingRight:"10px",textAlign:"center"}}><MdBuild  color='grey' size='2rem'/><div style={{verticalAlign:"bottom"}}>Settings</div></div>
     <div style={{display:'flex',paddingTop:"10px"}}><div className="info">
        <div className="username">username</div>
        <div className="username">emaiemaill@email.com</div>
    </div>
    <div className="profile-image">
    <AccountCircleIcon style={{fontSize:'40px'}}/>
    </div>
    </div>  
    </div>
  </Navbar.Collapse>
</Navbar>
</div>
    
    
   
}

export default NavMenu;

