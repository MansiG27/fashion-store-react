import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<Home />} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
