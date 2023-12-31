import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../../store/Selectors/taskSelectors';
import { NavLink } from 'react-router-dom';
import { deleteTask, modifyTask, sortTask } from '../../store/Slices/TaskSlice';
import { useState } from 'react';

export default function TaskList() {
  const tasks = useSelector(selectTasks);

  const initialState = {
    priority: false,
    checked: false,
  };

  const [filters, setFilters] = useState(initialState);

  const dispatch = useDispatch();

  const handleDelete = (task) => {
    dispatch(deleteTask(task));
  };

  const handleCheck = (task) => {
    const newTask = { ...task, validate: !task.validate };
    dispatch(modifyTask(newTask));
  };

  return (
    <>
      <button
        onClick={() => {
          setFilters({ ...filters, priority: !filters.priority });
          dispatch(sortTask(filters));
        }}
      >
        Sort by priority
      </button>
      <button
        onClick={() => {
          setFilters({ ...filters, checked: !filters.checked });
          dispatch(sortTask(filters));
        }}
      >
        Sort by state
      </button>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <div key={`${task.title}-${index}`}>
                <NavLink to={`/${task.id}`} state={task}>
                  <li>{task.title}</li>
                </NavLink>
                <input type='checkbox' onChange={() => handleCheck(task)} />
                <button onClick={() => handleDelete(task)}>X</button>
              </div>
            );
          })
        ) : (
          <span> Aucune tâche disponible</span>
        )}
      </ul>
    </>
  );
}
