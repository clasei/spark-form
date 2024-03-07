import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <p className="signup-text">Do bees dream of electric bikes? Subscribe & let's find out together</p>
      <input 
        type="email" 
        className="signup-input" 
        placeholder="Write here your best email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />

      <div>
        <button type="submit" className="signup-button">I'm all in</button>
      </div>
      
    </form>
  );
};

export default SignupForm;