import React from 'react'

type NavItemProps = {
    children: JSX.Element
}
/**
* NavItem
*/
const NavItem: React.FC<NavItemProps> = ({ children }) => {
    return (
        <div style={{
            height: '4rem',
            width: '4rem',
            display: 'grid',
            alignItems: 'center'
        }}>
            { children }
        </div>
    )
}

export { NavItem }