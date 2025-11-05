import { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleCompleted = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">A To-Do</h1>
      <TodoInput
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onAdd={addTodo}
      />
      <TodoList todos={todos} onToggleCompleted={toggleCompleted} />
    </div>
  );
}
