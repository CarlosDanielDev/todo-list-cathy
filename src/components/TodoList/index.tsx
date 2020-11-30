import React, { useState, useCallback, useEffect } from 'react';

import TodoItem from '../TodoItem';

import * as S from './styels';

interface Todo {
  title: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      title: 'Função para apagar',
      done: true
    },
    {
      title: 'Deixar mais bonito',
      done: false
    },
    {
      title: 'Local Storage',
      done: false
    },
  ]);
  const [todo, setTodo] = useState<Todo>({} as Todo);


  // console.log('estado', state)

  const checkTodoItem = (index: number) => {
    const newState = todoList.map((item, idx) => {
      if (index === idx) {
        return {
          ...item,
          done: !item.done
        }
      }

      return item;
    });
    setTodoList([
      ...newState,
    ]);
  }

  const handleSubmit = (todo: Todo): void => {
    console.log('foi ?')
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (index: number): void => {
    const newState: Todo[] = [...todoList];
    newState.splice(index, 1);
    setTodoList([
      ...newState,
    ]);
  }

  return (
    <S.Container>
      <h1>To-Do</h1>
      <div>
        <input className="newTodo"
          type="text"
          placeholder="Novo Todo"
          onChange={(event) => setTodo({ title: event.target.value, done: false })}
        />
        <button type="submit" onClick={() => handleSubmit(todo)}>
          Ok
        </button>
      </div>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem title={todo.title} 
          index={index} 
          handleCheck={checkTodoItem}
          handleRemove={deleteTodo}
          done={todo.done} 
          key={String(index)} />
        ))}
      </ul>
    </S.Container>
  );
}

export default TodoList;