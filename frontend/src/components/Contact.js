import React from 'react';
import "../stylesheets/Contact.css"


const Contact = () => {
  return (
    <div className="Contact-container">
      <div className="Contact-title">We’d love to hear from you!</div>
      <div className="Contact-form-container">
        

        <div class="group">      
          <input type="text" required/>
          <label>Name</label>
        </div>

        <div class="group">      
          <input type="text" required/>
          <label>Phone Number</label>
        </div>

        <div class="group">      
          <input type="text" required/>
          <label>Email</label>
        </div>

        <div class="group">      
          <input type="text" required/>
          <label>Message</label>
        </div>

        
      </div>
      <button class="btn-hover color-4">Send</button>
    </div>
    
  );
};

export default Contact;