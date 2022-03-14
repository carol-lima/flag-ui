import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid ${(props) => props.theme.colors.gray[100]};
    justify-content: center;
    align-items: center;
  }

  .title a {
    color: ${(props) => props.theme.colors.primary[500]};
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`;
