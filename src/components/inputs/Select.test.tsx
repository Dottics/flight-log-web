import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from './Select'

describe('Select', () => {
    it('should take options', () => {
        const options = [
            {value: 'hi', text: 'text'}
        ]
        render(<Select options={options} onChange={() => {}} />)
        screen.getByText(/text/i)
    })

    it('should call the on change function when clicked', async () => {
        const user = userEvent.setup()
        const options = [
            {value: 'test-value', text: 'test text'}
        ]
        const onChange = jest.fn((s: string) => {})

        render(<Select options={options} onChange={onChange}/>)
        const select = screen.getByTestId('select')
        const textOption = screen.getByText('test text')

        await user.selectOptions(select, [textOption])

        expect((textOption as HTMLOptionElement).selected).toBe(true)
        expect(onChange).toHaveBeenCalledWith('test-value')
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})