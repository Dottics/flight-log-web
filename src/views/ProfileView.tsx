import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectUser, signOut, deleteAccount } from '../store/user-slice'

import { Profile } from '../components/Profile'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Input } from '../components/inputs/Input'

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
        <div className="profile-view ml-24 flex">
            <div className="p-4 min-w-max">
                <Profile user={user!} />
            </div>
            <div className="grid items-center grow">
                <div className="w-1/4 ml-24 flex flex-col gap-8 my-6">
                    <Card>
                        <h3 className="text-2xl">edit profile</h3>
                        <Input type="text" label="username" value="" />
                        <Input type="text" label="first name" name="firstName" value="" />
                        <Input type="text" label="last name" name="lastName" value="" />
                        <Button>
                            update
                        </Button>
                    </Card>
                    <Card>
                        <h3 className="text-2xl">security</h3>
                        <Button onClick={signOutUser}>
                            sign out
                        </Button>
                        <Button onClick={deleteUserAccount}>
                            delete account
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export { ProfileView }