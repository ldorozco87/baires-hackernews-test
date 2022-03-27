import styled from "styled-components";

const headerHeight = `200px`;
const smBreakpoint = `420px`;

export const NewsPageWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  header {
    background-color: var(--color-secondary);
    box-sizing: border-box;
    height: ${headerHeight};
    left: 0;
    margin: 0 auto;
    max-width: 1040px;
    padding: 0 30px;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    @media screen and (max-width: ${smBreakpoint}) {
      height: auto;
    }
  }

  h1 {
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: 900;
  }

  .main-logo {
    margin-top: 10px;
    width: 140px;
  }

  .results-label {
    padding-left: 18px;
  }

  .news-container {
    padding-top: ${headerHeight};
    position: relative;
    top: 0;
    transition: all 0.5s;
    @media screen and (max-width: ${smBreakpoint}) {
      top: 30px;
    }

    &.results {
      top: 20px;
      @media screen and (max-width: ${smBreakpoint}) {
        top: 70px;
      }
    }
  }
`;
