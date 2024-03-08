import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAgreed) {
        alert('Please agree to the privacy policy.');
        return;
      }

    console.log(email);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <p className="signup-text">Do bees dream of electric bikes?<br></br>Subscribe & let's find out together</p>
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

      <label className="privacy-policy">
        <input 
          type="checkbox" 
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        I agree to the <a href="https://dobeesdream.com/politica-de-privacidad/" target="_blank"> Privacy Policy</a>
      </label>
      
    </form>
  );
};

export default SignupForm;