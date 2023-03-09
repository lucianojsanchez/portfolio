import { useContext } from "react";
import "./styles/_main.scss";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
