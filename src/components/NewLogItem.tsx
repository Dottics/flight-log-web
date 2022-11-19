import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { Input } from './inputs/Input'
import { Select } from './inputs/Select'
import { add, FlightLog } from '../store/flight-log-slice'

const NewLogItem: React.FC = () => {
    const dispatch = useAppDispatch()
    const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10))
    const [type, setType] = useState<string>()
    const [registration, setRegistration] = useState<string>()
    const [pilotInCommand, setPilotInCommand] = useState<string>()
    const [details, setDetails] = useState<string>()
    const [instrumentNavAids, setInstrumentNavAids] = useState<string>()
    const [instrumentPlace, setInstrumentPlace] = useState<string>()
    const [instrumentActual, setInstrumentActual] = useState<number>()
    const [instrumentFSTD, setInstrumentFSTD] = useState<number>()
    const [instructorSE, setInstructorSE] = useState<number>()
    const [instructorME, setInstructorME] = useState<number>()
    const [instructorFSTD, setInstructorFSTD] = useState<number>()
    const [FSTD, setFSTD] = useState<number>()
    const [multiEngine, setMultiEngine] = useState<boolean>()
    const [day, setDay] = useState<boolean>()
    const [dual, setDual] = useState<number>()
    const [PIC, setPIC] = useState<number>()
    const [PICUS, setPICUS] = useState<number>()
    const [copilot, setCopilot] = useState<number>()
    const [remark, setRemark] = useState<string>()
    const [dayLandings, setDayLandings] = useState<number>()
    const [nightLandings, setNightLandings] = useState<number>()

    const typeOptions = [
        {value: 'C210', text: 'C210'}
    ]

    /**
    * submit is the function to create a new flight log item
    */
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const newFlightLog: FlightLog = {
            date: new Date(date),
            type: type ?? '',
            registration: registration ?? '',
            pilotInCommand: pilotInCommand ?? '',
            details: details ?? '',
            instrumentNavAids: instrumentNavAids ?? '',
            instrumentPlace: instrumentPlace ?? '',
            instrumentActual: instrumentActual ?? 0,
            instrumentFSTD: instrumentFSTD ?? 0,
            instructorSE: instructorSE ?? 0,
            instructorME: instructorME ?? 0,
            instructorFSTD: instructorFSTD ?? 0,
            FSTD: FSTD ?? 0,
            multiEngine: multiEngine ?? false,
            day: day ?? false,
            dual: dual ?? 0,
            PIC: PIC ?? 0,
            PICUS: PICUS ?? 0,
            copilot: copilot ?? 0,
            remarks: remark ?? '',
        }
        dispatch(add(newFlightLog))
    }

    return (
        <div className="w-3/4 rounded-md p-4" style={{
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
        }}>
            <h2 className="text-2xl text-left">new flight log item</h2>
            <form className="grid grid-cols-4 gap-4" onSubmit={submit}>
                <section>
                    <h4>flight</h4>
                    <Input
                        type="date"
                        label="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                    <Input
                        type="text"
                        label="type"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    />
                    <Select options={typeOptions} onChange={(s) => setType(s)} value={type}/>
                    <Input
                        type="text"
                        label="registration"
                        onChange={(e) => setRegistration(e.target.value)}
                        value={registration}
                    />
                    <Input
                        type="text"
                        label="day"
                        name="day"
                        onChange={(e) => setDay(e.target.value === 'Y')}
                        value={day ? 'Y' : 'N'}
                    />
                    <Input
                        type="text"
                        label="details"
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                    />
                </section>
                <section>
                    <h4>instrument</h4>

                    <Input
                        type="text"
                        label="nav aids"
                        name="instrumentNavAids"
                        onChange={(e) => setInstrumentNavAids(e.target.value)}
                        value={instrumentNavAids}
                    />
                    <Input
                        type="text"
                        label="place"
                        name="instrumentPlace"
                        onChange={(e) => setInstrumentPlace(e.target.value)}
                        value={instrumentPlace}
                    />
                    <Input
                        type="number"
                        label="actual"
                        name="instrumentActual"
                        onChange={(e) => setInstrumentActual(Number(e.target.value))}
                        value={instrumentActual}
                    />
                    <Input
                        type="number"
                        label="FSTD"
                        name="instrumentFSTD"
                        onChange={(e) => setInstrumentFSTD(Number(e.target.value))}
                        value={instrumentFSTD}
                    />
                </section>
                <section>
                    <h4>plane</h4>
                    <Input
                        type="text"
                        label="multi-engine"
                        name="multiEngine"
                        onChange={(e) => setMultiEngine(e.target.value === 'Y')}
                        value={multiEngine ? 'Y' : 'N'}
                    />
                    <Input
                        type="number"
                        label="dual"
                        name="dual"
                        onChange={(e) => setDual(Number(e.target.value))}
                        value={dual}
                    />
                    <Input
                        type="number"
                        label="PIC"
                        name="PIC"
                        onChange={(e) => setPIC(Number(e.target.value))}
                        value={PIC}
                    />
                    <Input
                        type="number"
                        label="PICUS"
                        name="PICUS"
                        onChange={(e) => setPICUS(Number(e.target.value))}
                        value={PICUS}
                    />
                </section>
                <section>
                    <h4>instructor</h4>
                    <Input
                        type="number"
                        label="SE"
                        name="instructorSE"
                        onChange={(e) => setInstructorSE(Number(e.target.value))}
                        value={instructorSE}
                    />
                    <Input
                        type="number"
                        label="ME"
                        name="instructorME"
                        onChange={(e) => setInstructorME(Number(e.target.value))}
                        value={instructorME}
                    />
                    <Input
                        type="number"
                        label="FSTD"
                        name="instructorFSTD"
                        onChange={(e) => setInstructorFSTD(Number(e.target.value))}
                        value={instructorFSTD}
                    />
                    <Input
                        type="number"
                        label="FSTD"
                        name="FSTD"
                        onChange={(e) => setFSTD(Number(e.target.value))}
                        value={FSTD}
                    />
                </section>
                <section>
                    <h4>pilots</h4>
                    <Input
                        type="text"
                        label="pilot in command"
                        name="pilotInCommand"
                        onChange={(e) => setPilotInCommand(e.target.value)}
                        value={pilotInCommand}
                    />
                    <Input
                        type="number"
                        label="copilot"
                        name="copilot"
                        onChange={(e) => setCopilot(Number(e.target.value))}
                        value={copilot}
                    />
                </section>
                <section>
                    <h4>landing</h4>
                    <Input
                        type="number"
                        label="day landings"
                        name="dayLandings"
                        onChange={(e) => setDayLandings(Number(e.target.value))}
                        value={dayLandings}
                    />
                    <Input
                        type="number"
                        label="night landings"
                        name="nightLandings"
                        onChange={(e) => setNightLandings(Number(e.target.value))}
                        value={nightLandings}
                    />
                </section>
                <section>
                    <h4>final</h4>
                    <Input
                        type="text"
                        label="remarks"
                        name="remark"
                        onChange={(e) => setRemark(e.target.value)}
                        value={remark}
                    />
                    <button
                        className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
                    >
                        add
                    </button>
                </section>
            </form>
        </div>
    )
}

export { NewLogItem }