import React, { useState } from 'react'

import { NewLogItem } from './NewLogItem'
import { Summary } from './dashboard/Summary'

type Tabs = 'stats' | 'new'

const DashboardTabs: React.FC = () => {
    const [tab, setTab] = useState<Tabs>('stats')

    const renderTab = (tab: Tabs) => {
        switch (tab) {
            case 'new':
                return <NewLogItem className="grow" />
            case 'stats':
                return <Summary className="grow" />
        }
    }

    const isActive = (tabName: Tabs) => {
        if (tabName === tab) {
            return 'text-sky-500'
        }
        return ''
    }

    return (
        <div data-testid="dashboard-tabs" className="flex flex-row w-full gap-8">
            <div className="flex flex-col gap-4">
                <div className={`border rounded-md px-4 py-2 ${isActive('stats')}`} onClick={() => setTab('stats')}>
                    stats
                </div>
                <div className={`border rounded-md px-4 py-2 ${isActive('new')}`} onClick={() => setTab('new')}>
                    new
                </div>
            </div>
            { renderTab(tab) }
        </div>
    )
}

export { DashboardTabs }
