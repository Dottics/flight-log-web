import React, { ChangeEvent } from 'react'

type Option = {
    value: string;
    text: string;
}

type SelectProps = {
    options: Option[];
    onChange: (e: string) => void;
    value?: string;
}

const Select: React.FC<SelectProps> = ({
    options = [],
    onChange = (e) => {},
    value,
}) => {
    const renderOptions = [{
        value: 'none',
        text: 'Select'
    }, ...options]
    return (
            <select
                className="border border-solid border-gray-300 rounded-md h-8 mt-6 px-4 py-1 w-full"
                data-testid="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
                value={value}
            >
            {renderOptions.map((option, idx) => (
                <option key={idx} value={option.value}>{option.text}</option>
            ))}
        </select>
    )
}

export { Select }