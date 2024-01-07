import { Container, ContainerHeader, ContainerInputs } from "./styled";
import axios from "axios";
import { useRef } from "react";

export default function Register() {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleRegister = async () => {
    const email = refEmail?.current?.value;
    const password = refPassword?.current?.value;

    const response = await axios.post("http://localhost:3000/auth/register", {
      email: email,
      password: password,
    });

    const { data } = response;

    await axios.post(
      "http://localhost:3000/transactions",
      {
        name: "teste transaction",
        amount: 320,
        type: "income",
        categoryId: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
  };

  return (
    <Container>
      <ContainerHeader>
        <h2>Registre sua conta</h2>
      </ContainerHeader>

      <ContainerInputs>
        <input ref={refEmail} />
        <input ref={refPassword} />

        <button onClick={handleRegister}>Registrar</button>
      </ContainerInputs>
    </Container>
  );
}
