import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IconfigInitStateCounter {
  name: string;
  age: number;
}

const initialState: IconfigInitStateCounter = {
  name: "",
  age: 0,
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    setAge(state, { payload }: PayloadAction<number>) {
      state.age = payload;
    },
    setName(state, { payload }: PayloadAction<string>) {
      state.name = payload;
    },
  },
  initialState,
});

export const counterActionCreator = counterSlice.actions;
export default counterSlice.reducer;
