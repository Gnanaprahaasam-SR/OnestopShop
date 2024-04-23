import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import "../App.css";
import logo from "../logo.png";
import { CategoryData } from '../data/CatogoryData';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className=" ">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className='nav_logo  d-inline text-center '>
                    <img src={logo} alt='logo' style={{ marginTop: "-2%" }} /> ONE STOP SHOP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-2 ">
                        <Nav.Link as={NavLink} to="/" className='nav_menu'>HOME</Nav.Link>
                        <Nav.Link as={NavLink} to="/aboutUs" className='nav_menu'>ABOUT</Nav.Link>

                        <NavDropdown title="CATEGORIES" className='dropdown-navbar' id="collapsible-nav-dropdown">
                            {CategoryData.map((catogory, index) => (
                                <NavDropdown.Item key={index} className='dropdown-navbar' as={Link} to={`/category/${catogory.categoryKey}`}>{catogory.title}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/contactus" className='nav_menu'>CONTACT</Nav.Link>
                    </Nav>
                    <Nav className='d-flex flex-row gap-2'>
                        <NavLink as={NavLink} to="/wishList" className='nav_menu'>WISHLIST ({0})</NavLink>
                        <NavLink as={NavLink} to="/mycart" className='nav_menu'>CART ({0})</NavLink>
                        <AiOutlineUser className='mt-1' />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;