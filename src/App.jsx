import './App.css';
import { Route, Routes } from 'react-router-dom';
import TaskForm from './component/TaskForm/TaskForm';
import TaskList from './component/TaskList/TaskList';
import Nav from './component/Nav/Nav';
import TaskEdit from './page/TaskEdit/TaskEdit';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={<TaskForm />} />
        <Route path={'/list'} element={<TaskList />} />
        <Route path={'/:taskId'} element={<TaskEdit />} />
      </Routes>
    </>
  );
}

export default App;
