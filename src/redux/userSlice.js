import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {
      name: "",
      email: "",
    },
    loading: null,
    error: false
  },
  reducers: {
    addUser: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
    },

    startUser: (state) => {
      state.loading = true;
    },

    sucessUser: (state, action) => {
      state.userData = action.payload;
      state.loading = null;
    },

    errorUser: (state) => {
      state.loading = false;
      state.error = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser , startUser , sucessUser , errorUser } = userSlice.actions

export default userSlice.reducer