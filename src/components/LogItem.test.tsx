import { render, screen } from '@testing-library/react'
import { LogItem } from './LogItem'

describe('LogItem', () => {
    it('hi', () =>  {
        render(<LogItem flightLog={{
            date: new Date().toISOString(),
            type: 'C210',
            registration: 'V5-WAF',
            pilotInCommand: 'SELF',
            details: 'FYWE-FYOG',
            instrumentNavAids: 'ILS/VOR',
            instrumentPlace: 'WHV',
            instrumentActual: 0.4,
            instrumentFSTD: 0,
            instructorSE: 0,
            instructorME: 0,
            instructorFSTD: 0,
            FSTD: 0,
            multiEngine: 'multi',
            day: 'day',
            dual: 0,
            PIC: 1.1,
            PICUS: 0,
            copilot: 3.5,
            remarks: 'Route Training & Conversion'
        }} />, {
            wrapper: ({ children }) => (<table><tbody>{ children }</tbody></table>)
        })

        screen.getByText(/c210/i)
        screen.getByText(/v5-waf/i)
    })
})