import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/Slices/TaskSlice';

export default function TaskForm() {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    description: '',
    priority: 'Classique',
    validate: false,
  };

  const [task, setTask] = useState(initialState);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    const copy = { ...task, title: value };
    setTask(copy);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const copy = { ...task, description: value };
    setTask(copy);
  };

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    const copy = { ...task, priority: value };
    setTask(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Création de la tâche</h1>
        <label>
          Titre de la tâche :
          <input
            type={'text'}
            onChange={handleTitleChange}
            value={task.title}
            name='title'
            required
          ></input>
        </label>
        <label>
          Description de la tâche :
          <input
            type='text'
            onChange={handleDescriptionChange}
            value={task.description}
            name='description'
          ></input>
        </label>
        <select name='' id='' onChange={handlePriorityChange}>
          <option value='Classique'>Classique</option>
          <option value='Important'>Important</option>
          <option value='Urgent'>Urgent</option>
          <option value='Très urgent'>Très urgent</option>
        </select>
        <input type='submit' />
      </form>
    </>
  );
}
