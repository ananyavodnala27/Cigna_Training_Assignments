import { createSlice } from '@reduxjs/toolkit';

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    balance: 0,
  },
  reducers: {
    deposit: (state, action) => {
      const amt = Number(action.payload) || 0;
      state.balance += amt;
    },
    withdraw: (state, action) => {
      const amt = Number(action.payload) || 0;
      if (amt <= 0) return;
      if (state.balance >= amt) {
        state.balance -= amt;
      } else {
        // simple UI feedback; you can replace with better handling
        alert('Insufficient Balance!');
      }
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;
export default bankSlice.reducer;