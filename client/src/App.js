import {ThemeProvider,styled} from "styled-components";
import { lightTheme, LightTheme} from "./utils/Themes.js";
import {BrowserRouter} from "react-router-dom";
// import { Container } from "@mui/material";
// import styled from "styled-components";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
background: ${({theme})=>theme.bg};
`;

function App() {
  return <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Container>Hi</Container>
    </BrowserRouter>
  </ThemeProvider>

}

export default App;