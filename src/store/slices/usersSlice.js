const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
});

export const usersReducer = usersSlice.reducer;
