import { configureStore } from '@reduxjs/toolkit';
import TaskSlice from './Slices/TaskSlice';

const store = configureStore({
  reducer: {
    task: TaskSlice.reducer,
  },
});

export default store;
