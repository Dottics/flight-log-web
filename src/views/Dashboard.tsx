import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../store/user-slice'

import { LogList } from '../components/LogList'
import { Profile } from '../components/Profile'
import { DashboardTabs } from '../components/DashboardTabs'

const Dashboard: React.FC = () => {
    const user = useAppSelector(selectUser);
    return (
        <div className="dashboard ml-24">
            <div className="flex gap-8 p-4">
                { user ? <Profile user={user} /> : null }
                <DashboardTabs />
            </div>
            <div className="grid gap-4 p-4">
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