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
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    modifyTask(state, action) {
      const copy = [...state.tasks];
      const copy2 = copy.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
      state.tasks = copy2;
    },
    sortTask(state, action) {
      if (action.payload.priority) {
        state.tasks.sort((a, b) => {
          if (a.priority < b.priority) {
            return -1;
          }
          if (a.priority > b.priority) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload.checked) {
        state.tasks.sort((a, b) => {
          if (a.validate < b.validate) {
            return -1;
          }
          if (a.validate > b.validate) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
});

export const { addTask, modifyTask, deleteTask, sortTask } = TaskSlice.actions;
export default TaskSlice;
