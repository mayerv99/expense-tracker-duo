import React from "react";

import { Container, GreenBoard, GrayBoard } from "./styled";
import { ExpenseList } from "../../components/Expenselist/ExpenseList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handletest = () => {
    navigate("/");
  };

  return (
    <Container>
      <GreenBoard />
      <GrayBoard>
        <ExpenseList />
        <button onClick={handletest}>teste</button>
      </GrayBoard>
    </Container>
  );
}
