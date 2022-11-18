import React from 'react'

type InputProps = {
    type: 'text' | 'date' | 'datetime-local' | 'number';
    label: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number | undefined;
}

const Input: React.FC<InputProps> = ({
    label,
    name = label,
    type = 'text',
    placeholder,
    onChange = () => {},
    value
}) => {
    return (
        <div className="input-group relative">
            <label
                className="absolute mt-2 text-xs capitalize text-left"
                htmlFor={name}
            >
                { label }
            </label>
            <input
                className="border border-solid border-gray-300 rounded-md h-8 mt-6 px-4 py-1 w-full"
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export { Input }
