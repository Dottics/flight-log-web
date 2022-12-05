import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectFlightLogs } from '../../store/flight-log-slice'

type SummaryProps = {
    className: string;
}

const Summary: React.FC<SummaryProps> = ({ className }) => {
    const flightLogs = useAppSelector(selectFlightLogs)
    const total = flightLogs.length;

    const typeRank: Record<string, any> = {}
    const discreteDist = {
        pilotInCommand: 0,
        engine: {
            single: 0,
            multi: 0,
        },
        flights: {
            day: 0,
            night: 0,
        }
    }

    flightLogs.forEach((item) => {
        if(typeRank[item.type]) {
            typeRank[item.type].count += 1
        } else {
            typeRank[item.type] = {
                type: item.type,
                count: 1,
            }
        }

        item.pilotInCommand === 'SELF' ? discreteDist.pilotInCommand += 1 : discreteDist.pilotInCommand += 0

        // count single mutli engine distribution
        item.multiEngine === 'single' ? discreteDist.engine.single += 1 : discreteDist.engine.multi += 1

        // count day night distribution
        item.day === 'day' ? discreteDist.flights.day += 1 : discreteDist.flights.night += 1
    })

    let typeRankList = Object.keys(typeRank).map((type) => typeRank[type])
    typeRankList = typeRankList.sort((a, b) => b.count - a.count)

    return (
        <div className={`rounded-md p-4 ${className}`} style={{
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
        }}>
            <h2 className="text-left text-2xl">summary</h2>
            <div className="grid gap-4 grid-cols-3">
                <table>
                    <tbody>
                        {typeRankList.map((rankItem, idx) => (
                            idx < 5 ? (
                                <tr key={idx}>
                                    <td>{ rankItem.type }</td>
                                    <td>{ rankItem.count }</td>
                                    <td>{ (rankItem.count / total).toFixed(2) } %</td>
                                </tr>
                            ) : null)
                        )}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>total flights</td>
                            <td>{ flightLogs.length }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>pilot in command</td>
                            <td>{ discreteDist.pilotInCommand }</td>
                            <td>{ (discreteDist.pilotInCommand / total).toFixed(2) } %</td>
                        </tr>
                        <tr>
                            <td>single engine</td>
                            <td>{ discreteDist.engine.single }</td>
                            <td>{ (discreteDist.engine.single / total).toFixed(2) } %</td>
                        </tr>
                        <tr>
                            <td>multi engine</td>
                            <td>{ discreteDist.engine.multi }</td>
                            <td>{ (discreteDist.engine.multi / total).toFixed(2) } %</td>
                        </tr>
                        <tr>
                            <td>day flights</td>
                            <td>{ discreteDist.flights.day }</td>
                            <td>{ (discreteDist.flights.day / total).toFixed(2) } %</td>
                        </tr>
                        <tr>
                            <td>night flights</td>
                            <td>{ discreteDist.flights.night }</td>
                            <td>{ (discreteDist.flights.night / total).toFixed(2) } %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { Summary }