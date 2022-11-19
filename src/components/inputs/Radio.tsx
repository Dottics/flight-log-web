import React from 'react'

type RadioOption = {
    id: string;
    text: string;
    value: string;
}

type RadioProps = {
    name: string;
    options: RadioOption[]
}
const Radio: React.FC<RadioProps> = ({ name, options = [] }) => {

    return (
        <div className="">
            {options.map((option) => (
                <div key={option.id}>
                    <input

                        id={option.id}
                        name={name}
                        type="radio"
                        value={option.value}
                    />
                    <label htmlFor={option.id}>{option.text}</label>
                </div>
            ))}
        </div>
    )
}

export { Radio }