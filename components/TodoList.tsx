import { FC } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleCompleted: (index: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex items-center justify-between py-2 border-b border-gray-200"
        >
          <span
            className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}
          >
            {todo.text}
          </span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleCompleted(index)}
            className="ml-2"
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
