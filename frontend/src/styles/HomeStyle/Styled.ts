import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`;
