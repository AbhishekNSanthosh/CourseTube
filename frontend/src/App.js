import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import DomainPage from "./Pages/DomainPage/DomainPage";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CoursePage from "./Pages/CoursePage/CoursePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import CourseVideo from './Pages/CourseVideo/CourseVideo';
import TransitionsModal from "./Components/SigninModal/Signin";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D95656",
      },
      secondary: {
        main: purple[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domains" element={<DomainPage />} />
            <Route path="/domains/:courses" element={<CoursePage />} />
            <Route path="/domains/:courses/:video" element={<CourseVideo />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </HashRouter>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
