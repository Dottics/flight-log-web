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
    user: {
        username: 'jb007',
        firstName: 'james',
        middleName: 'arthur',
        lastName: 'bond'
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const selectUser = (state: RootState): User | null => state.user.user;

export default userSlice.reducer;