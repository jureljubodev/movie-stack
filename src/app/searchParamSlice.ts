import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: "",
}

export const searchSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

export const { incrementByAmount } = searchSlice.actions

export default searchSlice.reducer