import React from 'react';
import { FiTrash2 } from 'react-icons/fi'
import TodoList from '../TodoList';
import * as S from './styles';

interface TodoProps {
  title: string;
  done: boolean;
  handleCheck(index: number): void;
  handleRemove(index:number): void;
  index: number;
  children?: JSX.Element | JSX.Element[];
}


const TodoItem: React.FC<TodoProps> = ({ done, title, index, handleCheck, handleRemove }) => {
  return (
    <S.ListItem done={done}>
      <span>
        <>
          <input
            type="checkbox"
            checked={done}
            onClick={() => handleCheck(index)}
          />

          <label>
            {title}
          </label>

          <span  className='delete' onClick={() => handleRemove(index)}>
          <FiTrash2 size={20} color=" #bdc1c6"/>
          </span>
        </>
      </span>
    </S.ListItem>
  );
}

export default TodoItem;
