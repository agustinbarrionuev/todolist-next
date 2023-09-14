import Link from 'next/link';
import { useState } from 'react'; // Importa useState para manejar el estado local
import TaskList from '../components/TaskList';

function HomePage({ tasks: initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks); // Inicializa el estado local con las tareas iniciales

  // Función para eliminar una tarea por su ID
  const handleDeleteTask = async (taskId) => {
    try {
      // Elimina la tarea localmente
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea', error);
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Link href="/create">Crear tarea</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const tasks = await response.json();

  return {
    props: {
      tasks,
    },
  };
}

export default HomePage;
