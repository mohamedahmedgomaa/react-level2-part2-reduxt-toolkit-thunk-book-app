import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false, name: 'mohamed gomaa'},
    reducers: {
        logInOut: (state, action) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    }
});

export const { logInOut } = authSlice.actions
export default authSlice.reducer;