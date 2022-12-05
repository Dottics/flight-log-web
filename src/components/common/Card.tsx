import React, { ReactNode } from 'react'

type CardProps = {
    className?: string;
    children?: ReactNode | ReactNode[];
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
            <div className={`rounded-md p-4 ${className}`} style={{
                boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
            }}>
            { children }
        </div>
    )
}

export { Card }