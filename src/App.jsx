import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stock from "./pages/Stock";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Stock />}></Route>
        <Route path="/registration-form" element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
