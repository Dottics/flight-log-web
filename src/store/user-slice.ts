import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export type User = {
    username: string;
    firstName: string;
    middleName: string;
    lastName: string;
}

export type UserState = {
    user: User | null;
}

const initialState: UserState = {
//    user: {
//        username: 'jb007',
//        firstName: 'james',
//        middleName: 'arthur',
//        lastName: 'bond'
//    },
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut: (state: UserState) => {
            state.user = null
        },
        signIn: (state: UserState, action) => {
            state.user = {
                username: 'jb007',
                firstName: 'james',
                middleName: 'arthur',
                lastName: 'bond'
            }
        },
        signUp: (state: UserState, action) => {
            state.user = {
                username: 'jb007',
                firstName: 'james',
                middleName: 'arthur',
                lastName: 'bond'
            }
        },
        deleteAccount: (state: UserState) => {
            state.user = null
        }
    }
})

export const { signOut, signIn, signUp, deleteAccount } = userSlice.actions;

export const selectUser = (state: RootState): User | null => state.user.user;

export default userSlice.reducer;