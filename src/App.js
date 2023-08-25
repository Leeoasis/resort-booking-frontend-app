import Navbar from "./components/Navbar";
import Authentication from "./components/Authentication"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <>
    <Navbar />
    <section className="main col-md-8">
    <Routes>
        <Route path='/join' element={<Authentication />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </section>
    </>
  );
}

export default App;
