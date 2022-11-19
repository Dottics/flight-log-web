import React from 'react'

type RadioOption = {
    id: string;
    text: string;
    value: string;
}

type RadioProps = {
    name: string;
    options: RadioOption[];
    onChange?: (value: string) => void;
    value: string;
}
const Radio: React.FC<RadioProps> = ({ name, options = [], onChange = () => {}, value }) => {
    return (
            <div className="flex h-8 mt-6 px-4 py-1">
            {options.map((option) => (
                <div key={option.id} className="w-full">
                    <input
                        className="mr-4"
                        id={option.id}
                        name={name}
                        type="radio"
                        value={option.value}
                        checked={option.value === value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                    />
                    <label className="capitalize" htmlFor={option.id}>
                        { option.text }
                    </label>
                </div>
            ))}
        </div>
    )
}

export { Radio }