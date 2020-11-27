import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;

  ul {
    list-style: none;
    margin-top: 25px;
  }

  input {
    background: none;
    border: 0;
    outline: 0;
    width: 100px;
    height: 40px;
    color: #fff;
    &:focus {
      border-bottom: 1px solid #eee;
    }
    &::placeholder {
      color: #eee;
    }
    
  }

`;
