import styled from "styled-components";

export const Container = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: scroll;

  padding: 15px 20px;
`;

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  width: 100%;
  height: 50px;
  padding: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
  }

  > div > div > span {
    font-size: 12px;
    color: gray;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
