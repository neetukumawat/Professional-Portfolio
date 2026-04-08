import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeSection: 'hero',
    menuOpen: false,
    activeProjectFilter: 'All',
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    setProjectFilter: (state, action) => {
      state.activeProjectFilter = action.payload;
    },
  },
});

export const { setActiveSection, toggleMenu, closeMenu, setProjectFilter } = uiSlice.actions;
export default uiSlice.reducer;
