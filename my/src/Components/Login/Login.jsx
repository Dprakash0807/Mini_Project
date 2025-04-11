// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Import your Firebase config
import '../DarkMode/DarkMode.css';

// Initialize Firebase
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email/password login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSocialLogin = (provider) => {
    const auth = getAuth(app);
    let authProvider;

    if (provider === 'Google') {
      authProvider = new GoogleAuthProvider();
    } else if (provider === 'Facebook') {
      authProvider = new FacebookAuthProvider();
    }

    signInWithPopup(auth, authProvider)
      .then((result) => {
        // Handle successful login
        console.log('User  signed in:', result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error during social login:', error);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="social-login">
          <p>Or sign in with:</p>
          <button type="button" onClick={() => handleSocialLogin('Google')}>
            Google
          </button>
          <button type="button" onClick={() => handleSocialLogin('Facebook')}>
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;