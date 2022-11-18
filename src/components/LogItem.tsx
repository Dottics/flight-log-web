import React from 'react'
import type { FlightLog } from '../store/flight-log-slice'

type LogItemProps = {
    flightLog: FlightLog;
}

const LogItem: React.FC<LogItemProps> = ({ flightLog }) => {
    return (
        <tr>
            <td>{ flightLog.date.toISOString().slice(0, 10) }</td>
            <td>{ flightLog.type }</td>
            <td>{ flightLog.registration }</td>
            <td>{ flightLog.pilotInCommand }</td>
            <td>{ flightLog.details }</td>
            <td>{ flightLog.instrumentNavAids }</td>
            <td>{ flightLog.instrumentPlace }</td>
            <td>{ flightLog.instrumentActual }</td>
            <td>{ flightLog.instrumentFSTD }</td>
            <td>{ flightLog.instructorSE }</td>
            <td>{ flightLog.instructorME }</td>
            <td>{ flightLog.instructorFSTD }</td>
            <td>{ flightLog.FSTD }</td>
            <td>{ flightLog.multiEngine }</td>
            <td>{ flightLog.day }</td>
            <td>{ flightLog.dual }</td>
            <td>{ flightLog.PIC }</td>
            <td>{ flightLog.PICUS }</td>
            <td>{ flightLog.copilot }</td>
            <td>{ flightLog.remarks }</td>
        </tr>
    )
}

export { LogItem }