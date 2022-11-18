import { render } from '@testing-library/react'
import { LogItem } from './LogItem'

describe('LogItem', () => {
    it('hi', () =>  {
        render(<LogItem flightLog={{
            date: new Date(),
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
            multiEngine: true,
            day: true,
            dual: 0,
            PIC: 1.1,
            PICUS: 0,
            copilot: 3.5,
            remarks: 'Route Training & Conversion'
        }} />)
        expect(true).toBe(true)
    })
})