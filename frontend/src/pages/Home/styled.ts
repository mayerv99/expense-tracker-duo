import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;
`;

export const GreenBoard = styled.div`
  width: 50%;
  height: 90vh;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const GrayBoard = styled.div`
  width: 50%;
  height: 90vh;
  background-color: ${({ theme }) => theme.background.third};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
