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
      title: 'teste1',
      done: false
    },
  ]);
  const [todo, setTodo] = useState<Todo>({} as Todo);


  const checkTodoItem = useCallback((index: number) => {
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
  }, []);

  const handleSubmit = useCallback((todo: Todo): void => {
    setTodoList([...todoList, todo])
  }, []);


  useEffect(() => {
    alert('oi, estou sendo executado, antes do componente se montar!');
  }, []);

  return (
    <S.Container>
      <h1>To-Do</h1>
      <ul>
        {todoList.map((todo, index) => (
          <TodoItem title={todo.title} index={index} handleCheck={checkTodoItem} done={todo.done} key={String(index)} />
        ))}
      </ul>
      <input
        type="text"
        placeholder="Novo Todo"
        onChange={(event) => setTodo({ title: event.target.value, done: false })}
      />
      <button type="submit" onClick={() => handleSubmit(todo)}>
        Add new Todo
      </button>

    </S.Container>
  );
}

export default TodoList;