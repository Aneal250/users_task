/* eslint-disable no-param-reassign */

import { RootState } from "@lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AddUser } from "../types/data";

interface InitialState {
  users: User[];
  isLoadingUser: boolean;
}
const initialState: InitialState = {
  users: [],
  isLoadingUser: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state, action: PayloadAction<User[]>) => {
      state.isLoadingUser = true;
      state.users = action.payload;
      state.isLoadingUser = false;
    },
    addUser: (state, action: PayloadAction<AddUser>) => {
      state.isLoadingUser = true;
      const newUser: User = {
        id:
          state.users.length > 0
            ? state.users[state.users.length - 1].id + 1
            : 1,
        ...action.payload,
        address: {
          street: action.payload.address,
          suite: "",
          city: "",
          zipcode: "",
          geo: { lat: "", lng: "" },
        },
        company: { name: action.payload.company, catchPhrase: "", bs: "" },
        website: "",
      };
      state.users.push(newUser);
      state.isLoadingUser = false;
    },
    searchUsersByNameOrEmail: (state, action: PayloadAction<string>) => {
      state.isLoadingUser = true;
      const query = action.payload.toLowerCase();
      state.users = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      state.isLoadingUser = false;
    },
  },
});

export default userSlice.reducer;

export const { fetchUsers, addUser, searchUsersByNameOrEmail } =
  userSlice.actions;

export const users = (state: RootState) => state.users;
