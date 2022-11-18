import React from 'react'
import {useAppSelector} from '../app/hooks'
import { selectUser } from '../store/user-slice'

import { LogList } from '../components/LogList'
import { Profile } from '../components/Profile'
import { NewLogItem } from '../components/NewLogItem'

const Dashboard: React.FC = () => {
    const user = useAppSelector(selectUser);
    return (
        <div className="dashboard">
            <div className="flex gap-8 ml-24 p-4">
                { user ? <Profile user={user} /> : null }
                <NewLogItem />
            </div>
            <div className="grid gap-4 ml-24 p-4">
                <div className="rounded-md p-4" style={{
                    boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
                }}>
                    <h2 className="text-left text-2xl">flight log</h2>
                    <LogList />
                </div>
            </div>
        </div>
    )
}

export { Dashboard }