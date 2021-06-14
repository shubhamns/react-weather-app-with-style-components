import Weather from "./components/weather";
import styled from "styled-components";

function App() {
  return (
    <StyledContainer className="App">
      <Weather />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

export default App;
