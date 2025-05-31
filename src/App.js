import "./App.css";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
// import Nopage from './components/Nopage';
import { Routes, Route } from "react-router-dom";
// import SignIn from './components/SignIn';
import Home from "./Components/Home";
import SignOut from "./Components/SignOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
