import React from 'react'
import './Contact.css'

export const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a012529-997c-4363-aa85-57d5311b218a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message)
      event.target.reset();
    }
  }

  return (
    <div className='contact'>
      <div className='contact-left'>
        <h1>Have Any <br /> Questions ?</h1>
        <p>Have questions? Fill out the form beside to ask any queries. Check out our FAQs in the Support section for quick answers.</p>
      </div>
       <form onSubmit={onSubmit} className="contact-right">
           <div className="username">
            <input type="text" placeholder='First Name' name='firstname' />
            <input type="text" placeholder='Last Name' name='lastname'/>
           </div>
           <input type="email" placeholder='Email'  name='email' className='email' />
            <textarea name="message" placeholder='Enter your text'></textarea>
           <button type='submit' className="contact-submit">Submit</button>
        </form>
    </div>
  )
}
