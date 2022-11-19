import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { Input } from './inputs/Input'
import { Select } from './inputs/Select'
import { Radio } from './inputs/Radio'
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
    const [multiEngine, setMultiEngine] = useState<'single' | 'multi'>('single')
    const [day, setDay] = useState<'day' | 'night'>('day')
    const [dual, setDual] = useState<number>()
    const [PIC, setPIC] = useState<number>()
    const [PICUS, setPICUS] = useState<number>()
    const [copilot, setCopilot] = useState<number>()
    const [remark, setRemark] = useState<string>()
    const [dayLandings, setDayLandings] = useState<number>()
    const [nightLandings, setNightLandings] = useState<number>()

    const typeOptions = [
        {value: 'C210', text: 'C210'},
        {value: 'C150', text: 'C150'},
        {value: 'JABI', text: 'JABI'},
        {value: 'P28A', text: 'P28A'},
        {value: 'P38A', text: 'P38A'},
        {value: 'C172', text: 'C172'},
        {value: 'FNPT1', text: 'FNPT1'},
        {value: 'P28R', text: 'P28R'},
        {value: 'MF17', text: 'MF17'},
        {value: 'C310', text: 'C310'},
        {value: 'C425', text: 'C425'},
        {value: 'F406', text: 'F406'},
        {value: 'A321', text: 'A321'},
        {value: 'A320', text: 'A320'},
    ]

    const datNightOptions = [
        { id: 'day', value: 'day', text: 'day' },
        { id: 'night', value: 'night', text: 'night' },
    ]

    const multiEngineOptions = [
        { id: 'single', value: 'single', text: 'single' },
        { id: 'multi', value: 'multi', text: 'multi' },
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
            multiEngine: multiEngine ?? 'single',
            day: day ?? 'day',
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
                        <Select options={typeOptions} onChange={(s) => setType(s)} value={type}/>
                        <Input
                            type="text"
                            label="registration"
                            onChange={(e) => setRegistration(e.target.value)}
                            value={registration}
                        />
                        <Radio
                            name="dayNight"
                            options={datNightOptions}
                            value={day}
                            onChange={(s) => setDay(s === 'day' ? 'day' : 'night')}
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
                    <Radio
                        name="multiEngine"
                        value={multiEngine}
                        options={multiEngineOptions}
                        onChange={(s) => setMultiEngine(s === 'single' ? 'single' : 'multi')}
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