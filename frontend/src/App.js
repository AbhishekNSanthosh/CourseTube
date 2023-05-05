import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Home from "./Pages/HomePage/Home";
import Footer from './Components/Footer/Footer';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#D95656',
      },
      secondary: {
        main: purple[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
