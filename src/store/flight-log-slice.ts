import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export type FlightLog = {
    date: Date;
    type: string;
    registration: string;
    pilotInCommand: string;
    details: string;
    instrumentNavAids: string;
    instrumentPlace: string;
    instrumentActual: number;
    instrumentFSTD: number;
    instructorSE: number;
    instructorME: number;
    instructorFSTD: number;
    FSTD: number;
    multiEngine: boolean;
    day: boolean;
    dual: number;
    PIC: number;
    PICUS: number;
    copilot: number;
    remarks: string;
}

export const dummyLog = ({ overrides = {} }: { overrides?: Partial<FlightLog> }): FlightLog => {
    const f: FlightLog = {
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
    }
    return { ...f, ...overrides }
}

export type FlightLogState = {
    flightLogs: FlightLog[];
}

const initialState: FlightLogState = {
    flightLogs: [
        dummyLog({}),
        dummyLog({}),
        dummyLog({}),
        dummyLog({}),
        dummyLog({}),
    ]
}

const flightLogSlice = createSlice({
    name: 'flightLog',
    initialState,
    reducers: {
        add(state, action: PayloadAction<FlightLog>) {
            state.flightLogs = state.flightLogs.concat(action.payload)
        }
    }
})

export const { add } = flightLogSlice.actions

export const selectFlightLogs = (state: RootState) => state.flightLog.flightLogs

export default flightLogSlice.reducer