import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../utils/agent";

export const loginRequest = createAsyncThunk(
  "auth/loginRequest",
  async (user, thunkApi) => {
    try {
      const response = await auth.login(user);
      if (response.staus === 200) {
        await AsyncStorage.setItem("@access_key", response?.token);
      }
      return response;
    } catch (error) {
      if (error?.response?.data?.msg) {
        return thunkApi.rejectWithValue(error?.response?.data?.msg);
      } else {
        return thunkApi.rejectWithValue("somethings went wrong");
      }
    }
  }
);
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    loading: false,
    error: "",
    currentUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
