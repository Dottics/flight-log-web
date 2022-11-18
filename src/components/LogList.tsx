import React from 'react'
import { selectFlightLogs } from '../store/flight-log-slice'
import { LogItem } from './LogItem';
import { useAppSelector } from '../app/hooks'

/**
 * LogList displays all the pilots flight logs.
 */
const LogList: React.FC = () => {
    const flightLogs = useAppSelector(selectFlightLogs)

    return (
        <table className="w-full">
            <thead>
                <tr className="border-b">
                    <th rowSpan={2}>date</th>
                    <th rowSpan={2}>type</th>
                    <th rowSpan={2}>registration</th>
                    <th rowSpan={2}>pilot in command</th>
                    <th rowSpan={2}>details</th>
                    <th colSpan={4} className="h-9">instruments</th>
                    <th colSpan={3} className="h-9">instructor</th>
                    <th rowSpan={2}>fstd</th>
                    <th rowSpan={2}>multi-engine</th>
                    <th rowSpan={2}>day</th>
                    <th rowSpan={2}>dual</th>
                    <th rowSpan={2}>pic</th>
                    <th rowSpan={2}>picus</th>
                    <th rowSpan={2}>copilot</th>
                    <th rowSpan={2}>remarks</th>
                </tr>
                <tr className="border-b">
                    <th className="h-9">nav aids</th>
                    <th>place</th>
                    <th>actual</th>
                    <th>fstd</th>
                    <th>se</th>
                    <th>me</th>
                    <th>fstd</th>
                </tr>
            </thead>
            <tbody>
                {flightLogs.map((flightLog, index) =>
                    <LogItem key={index} flightLog={flightLog} />
                )}
            </tbody>
        </table>
    )
}

export { LogList }