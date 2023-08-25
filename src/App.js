import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Authentication from './components/Authentication';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/home';

function App() {
  const { data } = useSelector((state) => state.data);
  return (
    <>
      <Navbar />
      <section className="main col-md-8">
        <Routes>
          {(!data || data.length === 0) ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="join" element={<Authentication />} />
              {/* Redirect away from /login and /signup */}
              <Route path="login" element={<Navigate to="/home" />} />
              <Route path="signup" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              {/* If not signed in, normal route handling */}
              <Route path="/home" element={<Home />} />
              <Route path="/join" element={<Authentication />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </section>
    </>
  );
}

export default App;
