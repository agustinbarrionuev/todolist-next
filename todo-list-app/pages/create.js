import { useState } from 'react';
import Router from 'next/router';

function CreatePage() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          title,
          completed: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Router.push('/');
    } catch (error) {
      console.error('Error al crear la tarea', error);
    }
  };

  return (
    <div>
      <h1>Crear Tarea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título de la tarea:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CreatePage;
