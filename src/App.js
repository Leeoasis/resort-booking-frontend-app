import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import MyReservations from './components/reservations/reservations';
import ReservationForm from './components/forms/ReservationForm';

function App() {
  return (
    <>
      <Navbar />
      <section className="main col-md-8">
        <Routes>
          <Route path="/join" element={<Authentication />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/reservations/new" element={<ReservationForm />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
