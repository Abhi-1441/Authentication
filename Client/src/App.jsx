import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound'
import SignupForm from './pages/SignUpForm/SignUpForm';
import LoginForm from './pages/LoginForm/LoginForm';
import OTPForm from './pages/OTPForm/OTPForm';
import ResetPasswordForm from './pages/ResetPasswordForm/ResetPasswordForm';
import AuthSuccess from './components/AuthSuccess';
import Dashboard from './components/Dashboard';
import ToggleTheme from './components/ToggleTheme';
import Copyright from './components/Copyright';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div>
      <ToastContainer />
      <ToggleTheme />
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/verifyOTP" element={<OTPForm />} />
          <Route path="/resetPassword" element={<ResetPasswordForm />} />
          <Route path="/auth/success" element={<AuthSuccess />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Copyright />
      </Router>
    </div>
  )
}

export default App
