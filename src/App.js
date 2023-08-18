import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddReservation from './routes/AddReservation';
import DeleteReservation from './routes/DeleteReservation';
import Details from './routes/Details';
import Home from './routes/Home';
import Reservations from './routes/Reservations';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add-reservation" element={<AddReservation />} />
      <Route path="/delete-reservation" element={<DeleteReservation />} />
      <Route path="/details" element={<Details />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </Router>
);

export default App;
