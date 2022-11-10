import React, { useContext } from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import { UserInfoContext } from './App';


const NavBar = () => {
    let userInfo = useContext(UserInfoContext)

    return (
        <div className='NavBar'>
            <Navbar expand="md">
                <Link to="/" className="navbar-brand" name='GottaGo'>
                    GottaGo
                </Link>


                {userInfo.username ?
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink  to='/submit-washroom'>Submit washroom</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profile </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/logout" >Logout- {userInfo.username} </NavLink>
                        </NavItem>
                    </Nav>
                    :
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink  to='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to='/register'>Register</NavLink>
                        </NavItem>
                    </Nav>
                }

            </Navbar>
        </div>
    )
}

export default NavBar