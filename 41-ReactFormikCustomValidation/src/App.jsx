import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Forgotpass from "./Forgotpass";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="forgotpass" element={<Forgotpass />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
