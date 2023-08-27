import React from 'react'; // Import React
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import MyReservations from './components/reservations/reservations';

function App() {
  const { data } = useSelector((state) => state);
  const { loggedIn } = data;

  return (
    <>
      <Navbar />
      <section className="main col-md-8">
        <Routes>
          {/* User will be able to visit */}
          {loggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/join" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/signup" element={<Navigate to="/" />} />
              <Route path="/reservations" element={<MyReservations />} />
            </>
          ) : (
            <>
              {/* Prevented before Logged In */}
              <Route path="/join" element={<Authentication />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Navigate to="/join" />} />
            </>
          )}
        </Routes>
      </section>
    </>
  );
}

export default App;
