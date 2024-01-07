import { Container, ContainerHeader, ContainerInputs } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleClickSignup = () => {
    navigate("/register");
  };

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleRegister = () => {
    const email = refEmail?.current?.value;
    const password = refPassword?.current?.value;

    axios.post("http://localhost:3000/transactions", {
      email: email,
      password: password,
    });
  };

  return (
    <Container>
      <ContainerHeader>
        <h2>Entre em sua conta</h2>

        <p>
          Novo por aqui? <a onClick={handleClickSignup}>Crie sua conta</a>
        </p>
      </ContainerHeader>

      <ContainerInputs>
        <input ref={refEmail} />
        <input ref={refPassword} />

        <button onClick={handleRegister}>Log-in</button>
      </ContainerInputs>
    </Container>
  );
}
