import React from 'react';

import * as S from './styles';

interface TodoProps {
  title: string;
  done: boolean;
  handleCheck(index: number): void;
  index: number;
  children?: JSX.Element | JSX.Element[];
}


const TodoItem: React.FC<TodoProps> = ({ done, title, index, handleCheck }) => {
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
        </>
      </span>
    </S.ListItem>
  );
}

export default TodoItem;
