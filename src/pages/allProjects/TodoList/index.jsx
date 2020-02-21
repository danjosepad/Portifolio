import React, { useState } from 'react';
import styles from './styles.module.css';

export default function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText) {
      setTodos([...todos, {
        text: todoText,
        id: Math.random(),
      }]);

      setTodoText('');
    }
  };
  const removeTodo = (id) => {
    const todoList = [...todos];
    const index = todoList.findIndex((Todo) => Todo.id === id);

    todoList.splice(index, 1);
    setTodos(todoList);
  };
  return (
    <div>
      <h1 className={styles.title}>Todo List Javascript</h1>
      <div className={styles.content}>
        <aside className={styles.newTodo}>
          <label htmlFor="input">Nova tarefa</label>
          <input
            type="text"
            id={styles.inputTodo}
            placeholder="Digite uma nova tarefa"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button type="button" id={styles.addTodo} onClick={() => addTodo()}>Cadastrar</button>
        </aside>
        <main className="list">
          <h2>Suas tarefas</h2>
          <div id="todo">
            {todos.map((todo) => (
              <div className={styles.todoItem} key={todo.id}>
                <button type="button" onClick={() => removeTodo(todo.id)}>X</button>
                <strong>{todo.text}</strong>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
