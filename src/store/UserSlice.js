import { createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "ko-basic-cookie";
import { cookieName } from "../components/Constants";

export const UserSlice = createSlice({
    name: 'user',
    initialState: { token: getCookie(cookieName)},
    reducers: {
        userLogin: (state, action) => {
            state.token = action.payload.token;
            setCookie(cookieName, state.token, 1);
        },
        userLogout: (state, action) => {
            state.token = '';
            removeCookie(cookieName);
        },
    }
})

export const { userLogin, userLogout } = UserSlice.actions;

export default UserSlice.reducer;