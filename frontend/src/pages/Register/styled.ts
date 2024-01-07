import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-weight: 200;
    margin-top: 1.3em;

    > a {
      color: ${({ theme }) => theme.background.secondary};
      cursor: pointer;
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;

  align-items: center;
  flex-direction: column;
  > input {
    border: 1px solid gray;
    width: 400px;
    padding: 10px;
    border-radius: 4px;
  }

  > button {
    width: 320px;
    height: 40px;
    border: none;
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    font-size: 10pt;
    border-radius: 4px;
    margin-top: 40px;
  }
`;
