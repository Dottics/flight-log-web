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
                <NavLink to="/" className={({isActive}) => (isActive ? `text-sky-500`: '')}>home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/sign-in" className={({isActive}) => (isActive ? `text-sky-500`: '')}>sign in</NavLink>
            </NavItem>
        </div>
    )
    const loggedInNav = () => (
        <div>
            <NavItem>
                <NavLink to="/p/profile" className={({isActive}) => (isActive ? `text-sky-500`: '')}>
                    <div className="uppercase">{
                        `${user!.firstName.slice(0, 1)}${user!.lastName.slice(0, 1)}`
                    }</div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/p/dashboard" className={({isActive}) => (isActive ? `text-sky-500`: '')}>dash</NavLink>
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