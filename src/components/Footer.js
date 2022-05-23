import React from 'react';
import { LIST_TYPES } from '../config';

export default function Footer(props) {
  const { tasks } = props;
  const activeTasks = tasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
  const finishedTasks = tasks.filter((task) => task.status === LIST_TYPES.FINISHED);

  return (
    <footer className='footer'>
      <div className='footerItem footerRight'>
        <div className='activeTasks'>Active tasks: {activeTasks.length}</div>
        <div>Finished tasks: {finishedTasks.length}</div>
      </div>
      <div className='footerItem'>Kanban board by Vladimir Nagorniy, 2022</div>
    </footer>
  );
}
