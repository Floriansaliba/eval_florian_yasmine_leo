import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { modifyTask } from '../../store/Slices/TaskSlice';
import { selectTasks } from '../../store/Selectors/taskSelectors';

function TaskEdit() {
  const params = useParams();
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const taskId = params.taskId;

  console.log(tasks);

  const selectedTask = tasks.filter((task) => {
    console.log(task.id, taskId);
    return task.id == taskId;
  })[0];

  console.log(selectedTask);

  const [task, setTask] = useState(selectedTask);

  useEffect(() => {
    console.log(task);
  }, [task]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, title: value });
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, description: value });
  };

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, priority: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(modifyTask(task));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <select
          name=''
          id=''
          onChange={handlePriorityChange}
          value={task.priority}
        >
          <option value='Classique'>Classique</option>
          <option value='Important'>Important</option>
          <option value='Urgent'>Urgent</option>
          <option value='Très urgent'>Très urgent</option>
        </select>

        <button type='submit'>Modifier la tâche</button>
      </form>
    </>
  );
}

export default TaskEdit;
