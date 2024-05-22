import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const InitialState = {
  count: 0,
};

const CounterSlices = createSlice({
  name: "counter",
  initialState: InitialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    // Ejemplo con PayloadAction si necesitas pasar datos a la acción
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount } =
  CounterSlices.actions;
export default CounterSlices.reducer;
