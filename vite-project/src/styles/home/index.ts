import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.background};
`;
export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  max-width: 50rem;

  gap: 1.2rem;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 3rem;
  }
  p {
    font-weight: 500;
    color: ${(props) => props.theme["gray-500"]};
    font-size: 1rem;

    span {
        color: ${(props) => props.theme.purple};
        font-weight: 600;
    }
  }
`;
