import { ThemeProvider } from "styled-components";
import { Container } from "./styles/HomeStyle/Styled";
import { GlobalStyle } from "./styles/HomeStyle/global";
import { defaultTheme } from "./styles/HomeStyle/theme";
import axios from "axios";
import RoutesProvider from "./routes";

function App() {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhMWIwNDdjNi01MGFlLTRlNGEtYTMwYS01MDA5ZjJjZDc1N2IiLCJpYXQiOjE3MDQ1ODM5NTIsImV4cCI6MTcwNDYwMTk1Mn0.A7HHuSLhFzsz_pjlAO9jxjSWliq_EseN1W-mUf1A3Gk";

  const loginTest = () => {
    axios.post(
      "http://localhost:3000/auth",
      {
        email: "pedropin312go@gmail.com",
        password: "123456",
      },
      {
        // headers: {
        //   Authorization: token,
        // },
      }
    );
  };

  const test = () => {
    axios.post("http://localhost:3000/auth/register", {
      email: "pedropin312go@gmail.com",
      password: "123456",
    });
  };
  const getData = async () => {
    await axios
      .get("http://localhost:3000/transactions", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <RoutesProvider />
      </Container>
    </ThemeProvider>
  );
}

export default App;
