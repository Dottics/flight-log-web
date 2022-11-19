import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Radio } from './Radio'

describe('Radio', () => {
    it('should render radio options', () => {
        const testOptions = [
            {id: '1', text: 'test radio one', value: 'TEST_RADIO_ONE'},
            {id: '2', text: 'test radio two', value: 'TEST_RADIO_TWO'},
        ]
        render(<Radio value="TEST_RADIO_ONE" name="test" options={testOptions}/>)
        screen.getByText(/one/i)
        screen.getByText(/two/i)
    })

    it('should set the checked value on the selected option', async () => {
        const user = userEvent.setup()
        let value = 'TEST_RADIO_ONE'
        const testOptions = [
            {id: '1', text: 'test radio one', value: 'TEST_RADIO_ONE'},
            {id: '2', text: 'test radio two', value: 'TEST_RADIO_TWO'},
        ]
        const {rerender} = render(<Radio name="test" value={value} options={testOptions} onChange={(v) => {value = v}}/>)

        // due to default value
        expect((screen.getByLabelText(/one/i) as HTMLInputElement).checked).toBe(true)
        expect((screen.getByLabelText(/two/i) as HTMLInputElement).checked).toBe(false)

        await user.click(screen.getByLabelText(/one/i))
        rerender(<Radio name="test" value={value} options={testOptions} onChange={(v) => {value = v}}/>)
        expect((screen.getByLabelText(/one/i) as HTMLInputElement).checked).toBe(true)
        expect((screen.getByLabelText(/two/i) as HTMLInputElement).checked).toBe(false)

        await user.click(screen.getByLabelText(/two/i))
        rerender(<Radio name="test" value={value} options={testOptions} onChange={(v) => {value = v}}/>)
        expect((screen.getByLabelText(/one/i) as HTMLInputElement).checked).toBe(false)
        expect((screen.getByLabelText(/two/i) as HTMLInputElement).checked).toBe(true)
    })

//    it('should trigger an on change event to be able to update state', () => {
//        const user = userEvent.setup()
//        const testOptions = [
//            {id: '1', text: 'test radio one', value: 'TEST_RADIO_ONE'},
//            {id: '2', text: 'test radio two', value: 'TEST_RADIO_TWO'},
//            ]
//        render(<Radio name="test" options={testOptions}/>)
//    })
})