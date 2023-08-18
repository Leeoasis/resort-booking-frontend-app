import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authentication from "./components/Authentication"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { useRef } from "react";
function App() {
  const ref = useRef()
  return (
    <>
    <header className="bg-dark"><i class="fa-solid fa-bars fs-1 text-light" /></header>
    <Navbar />
    <section className="main col-12">
      <Routes>
        <Route path='/join' element={<Authentication />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </section>
    </>
  );
}

export default App;
