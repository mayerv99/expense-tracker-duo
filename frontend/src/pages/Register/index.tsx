import { Container, ContainerHeader, ContainerInputs } from "./styled";
import axios from "axios";
import { useRef } from "react";
import Auth from "../../domain/auth";

export default function Register() {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

    
  const handleRegister = async () => {

    const AuthDomain = new Auth("http://localhost:3000/user/me")

    const email = refEmail?.current?.value;
    const password = refPassword?.current?.value;

    const response = await AuthDomain.me(email, password)

    console.log(response)
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
