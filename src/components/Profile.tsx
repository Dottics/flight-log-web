import React from 'react'
import type { User } from '../store/user-slice'

type ProfileProps = {
    user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <div className="rounded-md p-4 mb-auto align-top w-1/4" style={{
//            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)'
        }}>
            <h2 className="text-2xl text-left">profile</h2>
            <div className="text-left" style={{
                display: 'grid',
                gridGap: '0.5rem',
            }}>
                <div>
                    <span className="mr-4">username</span>
                    <span>{ user.username }</span>
                </div>
                <div>
                    <span className="mr-4">first name</span>
                    <span>{ user.firstName }</span>
                </div>
                <div>
                    <span className="mr-4">last name</span>
                    <span>{ user.lastName }</span>
                </div>
            </div>
        </div>
    )
}

export { Profile }