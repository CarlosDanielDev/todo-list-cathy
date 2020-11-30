import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;

  div {
    width: 40vw;
    display: flex;
    justify-content: space-between;

    input.newTodo {
      font-size: 20px;
      padding: 22px 32px 22px 16px;
      border-radius: 4px 0 0 4px;
      border: 2px solid rgba(76, 26, 162, 1);
      outline: none;
      width: 100%;
      background: transparent;
      color: #fff;
    }
    
    button {
      padding: 16px;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      outline: none;
      background: linear-gradient(
        90deg,
        rgba(76, 26, 162, 1) 0%,
        rgba(66, 36, 250, 1) 100%
      );
      color: #fff;
      }
    }
  }
  @media screen and (max-width: 900px) {
    div {
      width: 50vw;
    }
  }

  ul {
    list-style: none;
    margin-top: 10px;
  }

  input {
    background: none;
    border: 0;
    outline: 0;
    width: 100px;
    height: 40px;
    color: #ccc;
    &::placeholder {
      color: #4f4f4f;
    }
  }
`;