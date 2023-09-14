import moment from 'moment';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span>Fecha de Creación: {moment(task.createdAt).format('LL')}</span>
          <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
