import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, User,Signup } from "./authApi";

const initialState = {
  userData: {},
  userInfo: {},
  isAuthenticated: false,
};

export const loginAsync = createAsyncThunk("auth/login", async (data) => {
  console.log(data);
  const response = await Login(data);
  console.log(response)
  return data;
});
export const signupAsync = createAsyncThunk("auth/signup", async (data) => {
  console.log(data);
  const response = await Signup(data);
  console.log(response);
  return response;
});
export const fetchUser = createAsyncThunk("async/getUser", async (data) => {
  const response = await User(data);
  return response;
});
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  return "Logout";
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.userData = action.payload;
          state.isAuthenticated = true;
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("Slice");
        state.userInfo = action.payload;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload) {
          state.isAuthenticated = true;
        }
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.userData = null;
        state.userInfo = null;
        state.isAuthenticated = false;
      });
  },
});

export const selectUserData = (state) => state.auth;
export default authSlice.reducer;
