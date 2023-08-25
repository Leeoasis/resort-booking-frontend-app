import React from 'react'; // Import React
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import MyReservations from './components/reservations/reservations';

function App() {
  const hasNonNullData = localStorage.getItem('data');

  return (
    <>
      <Navbar />
      <section className="main col-md-8">
        <Routes>
          {/* User will be able to visit */}
          <Route path="/" element={<Home />} />
          {hasNonNullData ? (
            <>
              <Route path="/join" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/signup" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              {/* Prevented before Logged In */}
              <Route path="/join" element={<Authentication />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
           <Route path="/join" element={<Authentication />} />
           <Route path="/login" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/home" element={<Home />} />
           <Route path="/reservations" element={<MyReservations />} />
          )}
        </Routes>
      </section>
    </>
  );
}

export default App;
