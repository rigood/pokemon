import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
${reset};
*{
  box-sizing: border-box;
}
body{
  font-family: 'Poppins', sans-serif;
}
.rock {
  background-color: rgb(148, 81, 81);
}
.ghost {
  background-color: rgb(247, 247, 247);
}
.electric {
  background-color: rgb(255, 255, 161);
}
.bug {
  background-color: #F6D6A7;
}
.poison {
  background-color: #e0a7f6;
}
.normal {
  background-color: #F4F4F4;
}
.fairy {
  background-color: rgba(255, 192, 203, 0.863);
}
.fire {
  background-color: #FBE3DF;
}
.grass {
  background-color:#E2F9E1;
}
.water {
  background-color:#E0F1FD;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
