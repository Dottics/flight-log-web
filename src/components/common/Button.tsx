import React, { ReactNode } from 'react'

type ButtonProps = {
    className?: string;
    children?: ReactNode | ReactNode[];
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
            <div
                className={`rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic ${className}`}
                onClick={onClick}
            >
                { children }
            </div>
            )
}

export { Button }