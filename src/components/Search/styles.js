import styled from "styled-components";

export const SearchWrapper = styled.div`
  form {
    margin-top: 20px;
  }

  input {
    border: none;
    color: var(--color-tertiary);
    font-size: 18px;
    height: 40px;
    padding: 0 10px;
    width: 300px;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: var(--color-secondary-dark);
    border-radius: 5px;
    border: none;
    color: var(--color-white);
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    width: 86px;

    &:active {
      background-color: var(--color-secondary-darkened);
    }
  }
`;
