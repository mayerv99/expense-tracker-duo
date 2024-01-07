import React from "react";

import { Container, ListItem } from "./styled";

export const ExpenseList: React.FC = () => {
  const mockArray = Array.from({ length: 30 }).map((_, index) => (
    <ListItem key={index}>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxy4qXKEXToPG2afM1Uk1_V1WbaQh31c82RQ&usqp=CAU"
        }
      />

      <div>
        <div>
          <p>Almoço</p>
          <span>24/12/2024</span>
        </div>

        <p>R$ 200</p>
      </div>
    </ListItem>
  ));

  return <Container>{mockArray}</Container>;
};
