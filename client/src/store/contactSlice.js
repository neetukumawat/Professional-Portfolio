import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/contact', formData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: 'Network error. Please try again.' }
      );
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
    fieldErrors: [],
  },
  reducers: {
    resetContact: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.fieldErrors = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.fieldErrors = [];
        state.success = false;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong.';
        state.fieldErrors = action.payload?.errors || [];
      });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
