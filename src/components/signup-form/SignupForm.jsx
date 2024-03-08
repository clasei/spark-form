import React, { useState } from 'react';
import './SignupForm.css';
import db from '/src/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isAgreed) {
        alert('Please agree to the privacy policy.');
        return;
      }

    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
        consent: isAgreed,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);

      setEmail('');
      setIsAgreed(false);
      setSubmitMessage('Welcome!');

      setTimeout(() => setSubmitMessage(''), 5000);
        
    } catch (e) {
      console.error("Error adding document: ", e);
      setSubmitStatus({ submitted: true, message: 'There was an error, please try again.' });
    }
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

      {submitMessage && (
        <div className="submit-message">
          {submitMessage}
        </div>
      )}
      
    </form>
  );
};

export default SignupForm;