import styled from "styled-components";

export const NewsCardWrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 16px 16px 30px;

  h2 {
    color: var(--color-tertiary);
    font-size: 1.5rem;
    margin: 14px 0 26px;
  }

  em {
    font-size: 14px;
  }

  a {
    border-radius: 4px;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 1.15rem;
    padding: 4px 8px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }
`;
