import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState;

}
type AuthState = {
    isAuth: boolean,
    username: string,
    isModerator: boolean
}
const initialState = {
    value: {
        isAuth: false,
        username: "",
        isModerator: false
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: "auth", initialState, reducers: {
        logOut: () => { return initialState },
        login: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true, username: action.payload, isModerator: false
                }
            }
        }
    }
})

export const { login, logOut } = auth.actions
export default auth.reducer