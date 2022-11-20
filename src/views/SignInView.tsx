import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../app/hooks'
import { signIn } from '../store/user-slice'
import { Input } from '../components/inputs/Input'

type Sections = 'signIn' | 'signUp' | 'forgotPassword'

const SignInView: React.FC = () => {
    const [section, setSection] = useState<Sections>('signIn')

    const renderSection = (v: Sections) => {
        switch (v) {
        case 'signIn':
            return <SignIn />
        case 'signUp':
            return <SignUp />
        case 'forgotPassword':
            return <ForgotPassword />
        }
    }

    return (
        <div className="sign-in-view grid items-center ml-24">
            <div className="m-auto flex max-w-md mt-24 gap-8">
                <div className="w-40">
                    <div className="grid grid-rows-auto gap-2">
                        <div
                            className="px-4 py-2 rounded-md border"
                            onClick={() => setSection('signIn')}
                        >sign in</div>
                        <div
                            className="px-4 py-2 rounded-md border"
                            onClick={() => setSection('signUp')}
                        >sign up</div>
                        <div
                            className="px-4 py-2 rounded-md border"
                            onClick={() => setSection('forgotPassword')}
                        >forgot password</div>
                    </div>
                </div>
                <div>
                    { renderSection(section) }
                </div>
            </div>
        </div>
    )
}

const SignIn: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const signInUser = () => {
        dispatch(signIn({}))
        navigate('/p/dashboard')
    }

    return (
        <div className="rounded-md border p-4" style={{
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
        }}>
            <h2>sign in</h2>
            <Input label="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button
                className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
                onClick={signInUser}
            >
                sign in
            </button>
        </div>
    )
}

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [repeatEmail, setRepeatEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [repeatPassword, setRepeatPassword] = useState<string>()

    return (
        <div className="rounded-md border p-4" style={{
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
        }}>
            <h2>sign up</h2>
            <Input label="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input label="first name" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <Input label="last name" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <Input label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input label="repeat email" name="repeatEmail" type="email" value={repeatEmail} onChange={(e) => setRepeatEmail(e.target.value)}/>
            <Input label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input label="repeat password" name="repeatPassword" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
            <button
                className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
                >
                sign up
            </button>
        </div>
    )
}

const ForgotPassword: React.FC = () => {
    const [username, setUsername] = useState<string>()
    return (
        <div className="rounded-md border p-4" style={{
            boxShadow: '0 0 5px 5px rgba(240, 240, 240, 1)',
        }}>
            <h2>forgot password</h2>
            <Input label="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button
                className="rounded-md border border-solid border-gray-300 hover:border-blue-500 w-full mt-6 h-8 uppercase italic"
            >
                forgot password
            </button>
        </div>
    )
}

export { SignInView }