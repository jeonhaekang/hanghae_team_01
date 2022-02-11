import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#0a1929",
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg">
        <p>작업영역</p>
      </Container>
    </Box>
  );
}

export default App;
