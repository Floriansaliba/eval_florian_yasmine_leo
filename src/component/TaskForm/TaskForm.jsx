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
      <form
        onSubmit={handleSubmit}
        className='bg-gray-300 border rounded-md flex flex-col p-9 text-gray-900'
      >
        <h1 className='mb-6'>Création de la tâche</h1>
        <div className='flex flex-col gap-6 my-8'>
          <label className='flex justify-between items-center text-lg font-light'>
            Titre de la tâche :
            <input
              className='ml-4 text-white bg-gray-500 border border-gray-900 rounded p-2'
              type={'text'}
              onChange={handleTitleChange}
              value={task.title}
              name='title'
              required
            ></input>
          </label>
          <label className='flex justify-between items-center text-lg font-light'>
            Description de la tâche :
            <input
              className='ml-4 text-white bg-gray-500 border border-gray-900 rounded p-2'
              type='text'
              onChange={handleDescriptionChange}
              value={task.description}
              name='description'
            ></input>
          </label>
          <label className='flex justify-between items-center text-lg font-light'>
            Priorité
            <select
              className='ml-4 text-white bg-gray-500 border border-gray-900 rounded p-2'
              name=''
              id=''
              onChange={handlePriorityChange}
            >
              <option value='Classique'>Classique</option>
              <option value='Important'>Important</option>
              <option value='Urgent'>Urgent</option>
              <option value='Très urgent'>Très urgent</option>
            </select>
          </label>
          <input
            className='cursor-pointer border rounded-md w-1/2 mx-auto p-3'
            type='submit'
          />
        </div>
      </form>
    </>
  );
}
