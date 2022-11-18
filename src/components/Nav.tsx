import React from 'react'
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
                <div>home</div>
            </NavItem>
        </nav>
    )
}

export { Nav }