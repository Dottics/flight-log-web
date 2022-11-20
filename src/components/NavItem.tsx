import React from 'react'

type NavItemProps = {
    children: JSX.Element
}
/**
* NavItem
*/
const NavItem: React.FC<NavItemProps> = ({ children }) => {
    return (
        <div className="h-16 w-16 grid items-center">
            { children }
        </div>
    )
}

export { NavItem }