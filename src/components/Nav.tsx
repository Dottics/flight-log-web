import React from 'react'
import { NavLink } from 'react-router-dom';
import {NavItem} from "./NavItem";

const Nav: React.FC = () => {
    return (
        <nav style={{
            position: 'absolute',
            padding: '0.25rem',
            margin: '1rem',
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
            borderRadius: '0.5rem'
        }}>
            <NavItem>
                <div>US</div>
            </NavItem>
            <NavItem>
                <NavLink to="/dashboard">
                    <div>dash</div>
                </NavLink>
            </NavItem>
        </nav>
    )
}

export { Nav }