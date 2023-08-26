
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes, Navigate} from 'react-router-dom';
import LoginPage from './Outer/Pages/LoginPage';
import ForgerPassword from './Outer/Pages/ForgetPassword';
import ChangePassword from './Outer/Pages/ChangePassword';
import MailSend from './Outer/Pages/MailSend';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/"  element={<LoginPage />} />
          <Route exact path="/forgetpassword" element={<ForgerPassword />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/mailsend" element={<MailSend />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>

    </React.Fragment>

  );
}

export default App;
