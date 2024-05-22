import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interface/Types";

/*
const users: User[] = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    name: "Jane",
    lastName: "Smith",
  },
  {
    id: 3,
    name: "Alice",
    lastName: "Johnson",
  },
  {
    id: 4,
    name: "Bob",
    lastName: "Brown",
  },
];
*/

const UserSlice = createSlice({
  name: "User",
  initialState: [] as User[],

  reducers: {
    setUser: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },

    //
    addUser: (state, action: PayloadAction<User>) => {
      // console.log(action.payload);
      state.push(action.payload);
    },
  },
});

//exportamos las acciones del slices
export const { setUser, addUser } = UserSlice.actions;
// exportamos el reducer para usar en store
export default UserSlice.reducer;
