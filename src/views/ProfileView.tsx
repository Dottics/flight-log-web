import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectUser, signOut, deleteAccount } from '../store/user-slice'

import { Profile } from '../components/Profile'

const ProfileView: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const user = useAppSelector(selectUser);

    const signOutUser = () => {
        console.log('sign out user')
        dispatch(signOut())
        navigate('/sign-in')
    }
    const deleteUserAccount = () => {
        console.log('delete user account')
        dispatch(deleteAccount())
        navigate('/')
    }

    return (
        <div className="profile-view ml-24">
            <div className="p-4">
                <Profile user={user!} />
            </div>
            <div className="p-4">
                <h3>Security</h3>
                <button
                    className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
                    onClick={signOutUser}
                >
                    sign out
                </button>
                <button
                    className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
                    onClick={deleteUserAccount}
                >
                    delete account
                </button>
            </div>
        </div>
    )
}

export { ProfileView }