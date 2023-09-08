import { useSelector } from 'react-redux';
import { selectTasks } from '../../store/Selectors/taskSelectors';
import { NavLink } from 'react-router-dom';

export default function TaskList() {
  const tasks = useSelector(selectTasks);

  console.log(tasks);

  return (
    <>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <div key={`${task.title}-${index}`}>
                <NavLink to={`/${task.id}`} state={task}>
                  <li>{task.title}</li>
                </NavLink>
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
