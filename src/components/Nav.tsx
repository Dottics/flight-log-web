import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../store/user-slice'
import { NavItem } from './NavItem'

const Nav: React.FC = () => {
    const user = useAppSelector(selectUser);
    const defaultNav = () => (
        <div>
            <NavItem>
                <NavLink to="/">
                    <div>home</div> 
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/login">
                    <div>login</div>
                </NavLink>
            </NavItem>
        </div>
    )
    const loggedInNav = () => (
        <div>
            <NavItem>
                <NavLink to="/profile">
                    <div className="uppercase">{
                        `${user!.firstName.slice(0, 1)}${user!.lastName.slice(0, 1)}`
                    }</div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/dashboard">
                    <div>dash</div>
                </NavLink>
            </NavItem>
        </div>
    )

    return (
        <nav style={{
            position: 'absolute',
            padding: '0.25rem',
            margin: '1rem',
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
            borderRadius: '0.5rem'
        }}>
            { user ? loggedInNav() : defaultNav() }
        </nav>
    )
}

export { Nav }