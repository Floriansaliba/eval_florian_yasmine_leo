import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [] };

let taskId = 0;

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      taskId++;
      state.tasks = state.tasks.concat([{ ...action.payload, id: taskId }]);
    },
  },
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice;
