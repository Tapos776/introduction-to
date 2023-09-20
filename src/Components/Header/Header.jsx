import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           
            <nav>
            <span>My WebSite</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/phone">Phone</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="/foot">Footer Parts</NavLink> 
            </nav>
        </div>
    );
};

export default Header;