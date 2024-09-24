import React from "react";

function TodoList({ todos, setTodos }) {
    const [newTodo, setNewTodo] = React.useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => !== index);
        setTodos(updatedTodos);
    };

    const handleCompleteTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => handleCompleteTodo(index)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;