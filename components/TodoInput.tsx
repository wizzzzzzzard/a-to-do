import { FC } from 'react';

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

const TodoInput: FC<TodoInputProps> = ({ value, onChange, onAdd }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add new todo"
        className="w-full p-2 pl-10 text-lg text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <button
        onClick={onAdd}
        className="ml-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
