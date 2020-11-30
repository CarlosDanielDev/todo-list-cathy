import styled, { css } from 'styled-components';


interface LabelProps {
  done: boolean | undefined;
  children?: JSX.Element | JSX.Element[];
}

export const ListItem = styled.li<LabelProps>`
  font-size: 20px;
  margin: 8px 0;
  width: 40vw;
  text-align: left;
  
  span {
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(76, 26, 162, 1) 0%,
      rgba(66, 36, 250, 1) 100%
    );
    padding: 10px;
    border-radius: 4px;

    label {
      ${({ done }) => done && css`
        text-decoration: line-through;
        color: #ccc;
      `}
      color: #bdc1c6;
    }

    input[type="checkbox"] {
      margin-right: 10px;
      position: relative;
      width: 1.5em;
      height: 1.5em;
      color: #363839;
      border: 1px solid #bdc1c6;
      border-radius: 4px;
      appearance: none;
      outline: 0;
      cursor: pointer;
      transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0px;
        left: 4px;
        bottom: 4px;
        width: 8px;
        height: 12px;
        border-style: solid;
        border-color: #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
      }
      &:checked {
        color: #fff;
        border-color: #06842c;
        background: #06842c;
        &::before {
          opacity: 1;
        }
      }
    }

    span {
      position: absolute;
      right: 30%;
      background: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    width: 50vw;

    span {
      span {
        right: 25%
      }
    }
  }
`;

export const Label = styled.label<LabelProps>`
 

`;