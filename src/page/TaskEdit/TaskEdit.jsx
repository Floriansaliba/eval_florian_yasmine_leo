import React from 'react';
import { useParams } from 'react-router-dom';

function TaskEdit() {
  const params = useParams();

  const taskId = params.taskId;

  console.log(taskId);

  return <div>TaskEdit</div>;
}

export default TaskEdit;
